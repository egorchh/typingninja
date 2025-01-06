import react from '@vitejs/plugin-react-swc';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr'; 

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		react(),
		svgr()
	], 
	resolve: {
		alias: {
			'~app': resolve(__dirname, './src/app'),
			'~pages': resolve(__dirname, './src/pages'),
			'~widgets': resolve(__dirname, './src/widgets'),
			'~features': resolve(__dirname, './src/features'),
			'~entities': resolve(__dirname, './src/entities'),
			'~shared': resolve(__dirname, './src/shared')
		}
	}
});
