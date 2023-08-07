import { CapacitorConfig } from '@capacitor/cli';

const appId = 'io.svelte.testapp';
const appName = 'Svelte TestApp';
const server = process.argv.includes('-hmr')
	? {
			url: 'http://25.144.137.235:5173', // always have http:// in url
			cleartext: true
	  }
	: {};
const webDir = 'build';

const config: CapacitorConfig = {
	appId,
	appName,
	webDir,
	server
};

if (process.argv.includes('-hmr'))
	console.log('WARNING: running capacitor with livereload config', config);

export default config;
