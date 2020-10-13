require('dotenv').config();
const {TOKEN_KEY} = process.env

export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: 'ポートフォリオ',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'robots', content: 'noindex,nofollow' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || 'ディスクリプション' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap'}
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
		'@/assets/sass/common.sass',
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'@/plugins/vue-scrollto'
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
 /*
	 ** Nuxt.js modules
	 */
	modules: [
		'@nuxtjs/style-resources',
		"@nuxtjs/axios",
		'@nuxtjs/google-analytics',
	],
	googleAnalytics: {
		id: 'UA-175583816-1'
	},
	styleResources: {
		sass: [
			'@/assets/sass/_mixins.sass',
		]
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend: (config) => {
		},
	},
	env: {
		TOKEN_KEY
	}
}
