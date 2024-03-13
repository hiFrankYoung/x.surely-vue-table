import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vitePluginVue from '@vitejs/plugin-vue';

export default defineConfig({
    build: {
        rollupOptions: {
            input: './index.html'
        }
    },

    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },

    plugins: [vitePluginVue()],

    resolve: {
        alias: {
            '@skit/x.surely-vue-table': fileURLToPath(new URL('../src', import.meta.url))
        }
    },

    server: {
        port: 8888
    }
});
