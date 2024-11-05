import { defineConfig } from 'vite';
import rwJsx from 'vite-plugin-rw-jsx';
export default defineConfig({
    plugins: [
        rwJsx({
            autoImports: ['render', 'ref', 'reactive', 'effect', 'nextTick', 'h'],
        }),
    ],
});
