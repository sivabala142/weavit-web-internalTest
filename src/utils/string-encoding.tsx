const printable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

type Charset = {
    name: string;
    containsChar: Function;
};

export const charsets: { [key: string]: Charset } = {
    none: {
        name: 'none',
        containsChar: function (c: string) {
            return false;
        },
    },
    us_ascii: {
        name: 'US-ASCII',
        containsChar: function (c: string) {
            return c.charCodeAt(0) < 128;
        },
    },
    iso_8859_1: {
        name: 'ISO-8859-1',
        containsChar: function (c: string) {
            return c.charCodeAt(0) < 256;
        },
    },
    utf_8: {
        name: 'UTF-8',
        containsChar: function (c: string) {
            return true;
        },
    },
};

const string2utf8bytearray = (s: string) => {
    // We need to allocate at least one byte per character.
    var output = new Array(s.length);
    for (var i = 0, j = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x7f) {
            output[j++] = c;
        } else if (c < 0x7ff) {
            output[j++] = 0xc0 + (c >> 6);
            output[j++] = 0x80 + (c & 0x3f);
        } else if (c < 0xffff) {
            output[j++] = 0xe0 + (c >> 12);
            output[j++] = 0x80 + ((c >> 6) & 0x3f);
            output[j++] = 0x80 + (c & 0x3f);
        } else if (c < 0x10ffff) {
            output[j++] = 0xf0 + (c >> 18);
            output[j++] = 0x80 + ((c >> 6) & 0x3f);
            output[j++] = 0x80 + ((c >> 12) & 0x3f);
            output[j++] = 0x80 + (c & 0x3f);
        }
    }
    return output;
};

export const stringEncodings = {
    base64: {
        printable,
        supportsNone: false,
        encode: (input: string, charset: Charset = charsets.utf_8) => {
            input = stringEncodings.none.encode(input, charset);

            if (typeof btoa == 'function') {
                var s = btoa(input);
                var output = new Array(Math.ceil(s.length / 76));
                for (var p = 0, k = 0; p < s.length; p += 76) {
                    output[k++] = s.substr(p, 76);
                }
                return output.join('\n');
            }
            var iterations = Math.ceil((input.length * 4) / 3);
            var output = new Array(iterations + Math.ceil(iterations / 76) + 1);
            input += '\0';
            var j = 8,
                b = input.charCodeAt(0),
                p = 0,
                k = 0;
            for (var i = 0; i < iterations; i++) {
                if (j < 6) {
                    b = (input.charCodeAt(p) << 8) + input.charCodeAt(p + 1);
                    p++;
                    j += 2;
                } else {
                    j -= 6;
                }
                output[k++] = printable.substr((b >> j) & 0x3f, 1);
                if (i % 76 == 75) {
                    output[k++] = '\n';
                }
            }
            output[k++] = '=='.substr((1 + input.length) % 3);
            return output.join('');
        },
        decode: (input: string, charset: Charset = charsets.utf_8) => {
            var equalCount = input.length - input.search(/={0,2}$/);
            input = input.replace(/(\s|={1,2}$)/g, '');
            var iterations = Math.floor((input.length * 3) / 4);
            var output = new Array(iterations);
            input += '\0';
            var j = 2,
                d = '',
                p = 0,
                k = 0,
                error = undefined;
            for (var i = 0; i < iterations; i++) {
                var b1 = printable.indexOf(input.charAt(p)) << j;
                var b2 = printable.indexOf(input.charAt(p + 1)) >> (6 - j);
                if (b1 == -1 || b2 == -1) {
                    error = 'invalid input at character ' + (b1 == -1 ? p : p + 1);
                }
                output[k++] = String.fromCharCode((b1 + b2) & 0xff);
                j = (j % 6) + 2;
                p += j === 2 ? 2 : 1;
            }
            // Look for trailing non-zero bits.
            if (!error && p < input.length - 1 && (printable.indexOf(input.charAt(p)) << j) & 0xff) {
                error = 'invalid input (trailing non-zero bits)';
            }
            var expectedEqualCount = (3 - (iterations % 3)) % 3;
            if (!error && equalCount !== expectedEqualCount) {
                error = 'invalid input (' + (expectedEqualCount === 0 ? 'no' : expectedEqualCount) + ' trailing "=" expected)';
            }
            if (error) {
                output[k++] = '\n' + error;
            }
            return stringEncodings.none.decode(output.join(''), charset);
        },
    },
    xml: {
        supportsNone: true,
        encode: (input: string, charset: Charset = charsets.utf_8) => {
            var output = '';
            for (var i = 0; i < input.length; i++) {
                var j = '<>"&\''.indexOf(input.charAt(i));
                if (j != -1) {
                    output += '&' + ['lt', 'gt', 'quot', 'amp', '#39'][j] + ';';
                } else if (!charset.containsChar(input.charAt(i))) {
                    output += '&#' + input.charCodeAt(i) + ';';
                } else {
                    output += input.charAt(i);
                }
            }
            return output;
        },
        decode: (input: string, charset: Charset = charsets.utf_8) => {
            return input.replace(/</g, '&lt;');
        },
    },
    url: {
        supportsNone: true,
        encode: (input: string, charset: Charset = charsets.utf_8) => {
            return charset.name === 'UTF-8' ? encodeURIComponent(input) : escape(input).replace(/\+/g, '%2B');
        },
        decode: (input: string, charset: Charset = charsets.utf_8) => {
            input = input.replace(/\+/g, ' ');
            return charset.name === 'UTF-8' ? decodeURIComponent(input) : unescape(input);
        },
    },
    js: {
        supportsNone: true,
        encode: (input: string, charset: Charset = charsets.utf_8) => {
            var output = '';
            for (var i = 0; i < input.length; i++) {
                var j = '\b\t\n\v\f\r"\'\\'.indexOf(input.charAt(i));
                if (j !== -1) {
                    output += '\\' + 'btnvfr"\'\\'.substr(j, 1);
                } else if (input.substr(i, 2) === '</') {
                    output += '<\\/';
                    i++;
                } else if (!charset.containsChar(input.charAt(i))) {
                    if (input.charCodeAt(i) > 255) {
                        var o = '000' + input.charCodeAt(i).toString(16);
                        output += '\\u' + o.substring(o.length - 4, o.length);
                    } else {
                        var o = '0' + input.charCodeAt(i).toString(16);
                        output += '\\x' + o.substring(o.length - 2, o.length);
                    }
                } else {
                    output += input.charAt(i);
                }
            }
            return output;
        },
        decode: (input: string, charset: Charset = charsets.utf_8): string | undefined => {
            try {
                return !/([^\\]'|\r|\n)/.test(input) ? eval("'" + input + "'") : undefined;
            } catch (e) {
                return undefined;
            }
        },
    },
    none: {
        supportsNone: false,
        encode: (input: string, charset: Charset = charsets.utf_8) => {
            var output = [];
            if (charset.name === 'UTF-8') {
                var bytes = string2utf8bytearray(input);
                for (var i = 0; i < bytes.length; i++) {
                    output.push(String.fromCharCode(bytes[i]));
                }
                return output.join('');
            } else {
                return input.replace(/[^\x00-\xFF]/, '?');
            }
        },
        decode: (input: string, charset: Charset = charsets.utf_8) => {
            if (charset.name !== 'UTF-8') {
                return input;
            }
            var output = [];
            for (var i = 0; i < input.length; i++) {
                var c = input.charCodeAt(i);
                if (c <= 0x7f) {
                    output.push(input.substr(i, 1));
                } else if (0xc0 <= c && c <= 0xdf) {
                    var c2 = input.charCodeAt(++i);
                    if (0x80 <= c2 && c2 <= 0xbf) {
                        var o = ((c & 0x1f) << 6) + (c2 & 0x3f);
                        output.push(String.fromCharCode(o));
                    } else {
                        return 'invalid input';
                    }
                } else if (0xe0 <= c && c <= 0xef) {
                    var c2 = input.charCodeAt(++i);
                    var c3 = input.charCodeAt(++i);
                    if (0x80 <= c2 && c2 <= 0xbf && 0x80 <= c3 && c3 <= 0xbf) {
                        var o = ((c & 0xf) << 12) + ((c2 & 0x3f) << 6) + (c3 & 0x3f);
                        output.push(String.fromCharCode(o));
                    } else {
                        return 'invalid input';
                    }
                } else if (0xe0 <= c && c <= 0xef) {
                    var c2 = input.charCodeAt(++i);
                    var c3 = input.charCodeAt(++i);
                    var c4 = input.charCodeAt(++i);
                    if (0x80 <= c2 && c2 <= 0xbf && 0x80 <= c3 && c3 <= 0xbf && 0x80 <= c4 && c4 <= 0xbf) {
                        var o = ((c & 7) << 18) + ((c2 & 0x3f) << 12) + ((c2 & 0x3f) << 6) + (c4 & 0x3f);
                        output.push(String.fromCharCode(o));
                    } else {
                        return 'invalid input';
                    }
                } else {
                    return 'invalid input';
                }
            }
            return output.join('');
        },
    },
};