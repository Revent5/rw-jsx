import rwJsx from 'vite-plugin-rw-jsx';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        rwJsx({
            autoImports: ['render'],
        }),
    ],
});
