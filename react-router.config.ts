import type { Config } from "@react-router/dev/config";

export default {
	// return a list of URLs to prerender at build time
	async prerender() {
		return [
			"/",
			"/en/",
			"/es/",
			"/fr/",
			"/ru/",
			"/tr/",
			"/ar/",
			"/id-card/",
			"/en/id-card/",
			"/es/id-card/",
			"/fr/id-card/",
			"/ru/id-card/",
			"/tr/id-card/",
			"/ar/id-card/",
			"/certificate-of-conduct/",
			"/en/certificate-of-conduct/",
			"/es/certificate-of-conduct/",
			"/fr/certificate-of-conduct/",
			"/ru/certificate-of-conduct/",
			"/tr/certificate-of-conduct/",
			"/ar/certificate-of-conduct/",
			"/residence-registration/",
			"/en/residence-registration/",
			"/es/residence-registration/",
			"/fr/residence-registration/",
			"/ru/residence-registration/",
			"/tr/residence-registration/",
			"/ar/residence-registration/",
			"/about/",
			"/en/about/",
			"/es/about/",
			"/fr/about/",
			"/ru/about/",
			"/tr/about/",
			"/ar/about/",
			"/data-privacy/",
			"/en/data-privacy/",
			"/es/data-privacy/",
			"/fr/data-privacy/",
			"/ru/data-privacy/",
			"/tr/data-privacy/",
			"/ar/data-privacy/",
		];
	},
} satisfies Config;
