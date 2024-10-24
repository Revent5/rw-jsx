import { defineConfig } from 'vite';
import { rwJsxPlugin } from 'vite-plugins-rw-jsx';
export default defineConfig({
    plugins: [
        rwJsxPlugin({
            autoImports: ['render', 'ref', 'reactive', 'effect', 'nextTick', 'h'],
        }),
    ],
});
