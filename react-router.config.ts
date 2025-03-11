import type { Config } from "@react-router/dev/config";

export default {
	// return a list of URLs to prerender at build time
	async prerender() {
		return [
			"/",
			"/en/",
			"/id-card/",
			"/en/id-card/",
			"/certificate-of-conduct",
			"/en/certificate-of-conduct",
			"/residence-registration/",
			"/en/residence-registration/",
			"about",
			"/en/about",
		];
	},
} satisfies Config;
