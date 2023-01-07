import { federation } from '@gioboa/vite-module-federation';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { reactReplacements } from '@softarc/native-federation-esbuild/src/lib/react-replacements';

export default defineConfig(async ({ command }) => ({
	server: {
		fs: {
			allow: ['.', '../shared'],
		},
	},
	plugins: [
		await federation({
			options: {
				workspaceRoot: __dirname,
				outputPath: 'dist',
				tsConfig: 'tsconfig.json',
				federationConfig: 'module-federation/federation.config.cjs',
				verbose: true,
				dev: command === 'serve',
			},
			adapter: createEsBuildAdapter({ 
				plugins: [],
				fileReplacements: reactReplacements.dev,
			}),
		}),
		react(),
	],
}));
