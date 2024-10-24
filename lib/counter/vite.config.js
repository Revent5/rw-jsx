import { rwJsxPlugin } from 'vite-plugins-rw-jsx';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        rwJsxPlugin({
            autoImports: ['render'],
        }),
    ],
});
