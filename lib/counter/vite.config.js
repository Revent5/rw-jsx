import viteRwJsx from 'vite-plugin-rw-jsx';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        viteRwJsx({
            autoImports: ['render'],
        }),
    ],
});
