import cheerio from 'cheerio';
import _ from 'lodash';
// import {
//   IDraftjsEditorRawContent,
// } from '../DraftjsEditor';
import { IMemo } from '../graphql-models';
import { stringEncodings } from '../utils/string-encoding'

export function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

export type EntityRangeProps = {
  offset: number;
  length: number;
  key: string | number;
};

export enum EntityMapMutability {
  MUTABLE = 'MUTABLE',
  IMMUTABLE = 'IMMUTABLE',
  SEGMENTED = 'SEGMENTED',
}
export type EntityMapValue = {
  type: string;
  mutability: EntityMapMutability;
  data: any;
};

export type EntityMap = { [key: string | number]: EntityMapValue };

export const NodeType = strEnum(['PERSON', 'GROUP', 'EVENT', 'LOCATION', 'MEMO', 'TOPIC', 'WEBCONTENT', 'DOCUMENT']);
export type IDraftjsEditorRawContent = {
  // schema for single block flattening blocks[0] data
  type: DraftjsEditorBlockType;
  text: string;
  entityRanges: EntityRangeProps[];
  entityMap: EntityMap;
};
export const MemoTagType = {
  WIKI: 'WIKI',
  [NodeType.PERSON]: NodeType.PERSON,
  [NodeType.GROUP]: NodeType.GROUP,
  [NodeType.MEMO]: NodeType.MEMO,
  [NodeType.EVENT]: NodeType.EVENT,
  [NodeType.DOCUMENT]: NodeType.DOCUMENT,
  [NodeType.TOPIC]: NodeType.TOPIC,
};

export const parseBlockContent = (memo?: IMemo): IDraftjsEditorRawContent | undefined => {
  let parsedContent: IDraftjsEditorRawContent | undefined;
  if (memo?.stringifiedContent) {
    parsedContent = parseJSONString(memo?.stringifiedContent) ?? undefined;
  } else if (memo?.content) {
    parsedContent = {
      type: DraftjsEditorBlockType.Unstyled,
      text: _.includes(memo.content, '<p>')
        ? convertMemoContentToPlainText(memo.content) ?? memo.content
        : memo.content,
      entityRanges: [],
      entityMap: {},
    };
  }
  return parsedContent;
};

export const parseJSONString = (str: string): any => {
  let result: any;
  try {
    result = JSON.parse(str);
  } catch (e) { }
  return result;
};

export enum DraftjsEditorBlockType {
  Unstyled = 'unstyled',
  H1 = 'header-one',
  H2 = 'header-two',
  H3 = 'header-three',
  H4 = 'header-four',
  H5 = 'header-five',
  H6 = 'header-six',
  UL = 'unordered-list-item',
  OL = 'ordered-list-item',
  Blockquote = 'blockquote',
  CodeBlock = 'code-block',
  Atomic = 'atomic',
  //
  UncompletedTask = 'uncompleted-task',
  CompletedTask = 'completed-task',
}
export const MemoWikiTag = 'tag-wiki';
export const MemoMentionTagStart = 'tag-node';
export const convertMemoContentToPlainText = (memoContent: string): string | undefined => {
  let result: string | undefined;
  try {
    const content$ = cheerio.load(stringEncodings.js.decode(memoContent) ?? memoContent);
    Object.keys(MemoTagType).forEach(type => {
      const tagKey = type === MemoTagType.WIKI ? MemoWikiTag : `${MemoMentionTagStart}-${_.lowerCase(type)}`;
      const elements$ = content$(`*[id^="${tagKey}-"]`);
      elements$.each((i, ele) => {
        const ele$ = content$(ele);
        let displayName = ele$.attr('name');
        displayName = decodeURIComponent(displayName ?? '');
        ele$.html(`${displayName}`);
      });
    });

    const contentLines: string[] = [];
    // content$('div').each((i: number, ele: cheerio.Element) => {
    content$('body')
      .children()
      .each((i, ele) => {
        const ele$ = content$(ele);
        contentLines?.push(ele$.text());
      });
    if (_.isEmpty(contentLines)) result = undefined;
    result = contentLines.join('\n');
  } catch (e) {
    console.warn('convertMemoContentToPlainText err:', e);
  } finally {
    return result;
  }
};