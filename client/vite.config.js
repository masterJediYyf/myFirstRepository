import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import styleImport from 'vite-plugin-style-import';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), styleImport({
        libs: [{
            libraryName: 'zarm',
            esModule: true,
            resolveStyle: (name) => {
                return `zarm/es/${name}/style/css`
            }
        }]
    })],
    css: {
        modules: {
            localsConvention: 'dashesOnly'
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    server: {
        proxy: {
          '/api': {
            target: 'http://localhost:7001', //  /api/userInfo  => http://localhost:5000/api/userInfo
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
          }
        }
    },
    resolve:{
        // alias 专门用来给路径取别名
        alias:{
            '@': path.resolve(__dirname,'src') ,//读取 src 的绝对路径
            'utils':path.resolve(__dirname,'src/utils')
        }
    }
})