import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
	],
  build: {
    lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'twinmight',
        formats: ['es', 'umd'],
        fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
        external: ['react', 'react-dom', 'styled-components'],
        output: {
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'styled-components': 'styled',
            },
        },
    },
},
});
