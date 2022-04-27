import { defineConfig, loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgrPlugin from 'vite-plugin-svgr';
import { resolve } from 'path';


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    // expose .env as process.env instead of import.meta since jest does not import meta yet
    const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
        return {
            ...prev,
            ['process.env.' + key]: `"${val}"`,
        };
    }, {});

    return {
        optimizeDeps: {
            esbuildOptions: {
              loader: {
                '.js': 'jsx',
              },
            },
          },
        preview: {
            port: 8080,
        },
        define: envWithProcessPrefix,
        resolve: {
            alias: {
                'react-native': resolve('./src/react-native-web.js'),
                'react-native/Libraries/Image/resolveAssetSource': resolve(
                  './src/react-native-web.js',
                ),
                'victory-native': 'victory',
                'react-native-svg': 'react-native-svg-web',
                'react-native-linear-gradient': 'react-native-web-linear-gradient',
                'lottie-react-native': 'react-native-web-lottie',
                '@svanboxel/visibility-sensor-react-native': 'react-visibility-sensor',
            }
        },
        build: {
            outDir: 'build',
        },
        plugins: [
            reactRefresh(),
            svgrPlugin({
                svgrOptions: {
                    // ...svgr options (https://react-svgr.com/docs/options/)
                },
            }),
        ],
    };
});

