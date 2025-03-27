const languages = ["/", "/en/", "/es/", "/fr/", "/ru/", "/tr/", "/ar/"];
const basePaths = [
	"", // <-- this is the home path for each language
	"about/",
	"data-privacy/",
];

/**
 * All paths that should show the footer:
 * german: "/", "/about/", "/data-privacy/"
 * english: "/en/", "/en/about/", "/en/data-privacy/"
 * spanish: "/es/", "/es/about/", "/es/data-privacy/"
 * french: "/fr/", "/fr/about/", "/fr/data-privacy/"
 * russian: "/ru/", "/ru/about/", "/ru/data-privacy/"
 * turkish: "/tr/", "/tr/about/", "/tr/data-privacy/"
 * arabic: "/ar/", "/ar/about/", "/ar/data-privacy/"
 */
const footerPaths = languages
	.map((language) => basePaths.map((basePath) => `${language}${basePath}`))
	.flat();

export function isPathWithFooter(pathname: string): boolean {
	const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;

	return footerPaths.includes(normalizedPath);
}
