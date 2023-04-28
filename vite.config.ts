import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { partytownVite } from '@builder.io/partytown/utils';
import { join } from 'path';
import Unfonts from 'unplugin-fonts/vite'

export default defineConfig(() => {
  return {
			plugins: [
				qwikCity(),
				qwikVite(),
				tsconfigPaths(),
				partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
				Unfonts({
					google: {
						families: [{name: 'Jost', styles: 'ital,wght@0,400;1,200',}],
					},
				}),
			],
			preview: {
				headers: {
					"Cache-Control": "public, max-age=600",
				},
			},
		};
});
