import { dev } from '$app/environment';

export const siteConfig = {
	name: 'Boileplate',
	url: dev ? 'dev-url' : 'production-url',
	description: 'Boilerplate for SvelteKit',
	imageUrl: '',
	keywords: ['boilerplate', 'svelte', 'sveltekit'],
	author: 'SxYxuse',
	themeColor: '#110F15'
};

export type SiteConfig = typeof siteConfig;
