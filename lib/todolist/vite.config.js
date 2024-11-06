import { defineConfig } from 'vite';
import viteRwJsx from 'vite-plugin-rw-jsx';
export default defineConfig({
    plugins: [
        viteRwJsx({
            autoImports: ['render', 'ref', 'reactive', 'effect', 'nextTick'],
        }),
    ],
});
