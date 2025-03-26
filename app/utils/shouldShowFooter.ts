export function isRouteWithFooter(pathname: string): boolean {
	const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;

	// Base paths that should show footer (without language prefix)
	const basePaths = ["/", "/about/", "/data-privacy/"];

	const languages = ["en", "es", "fr", "ru", "tr", "ar"];

	// Check if it's a base path (for german)
	if (basePaths.includes(normalizedPath)) {
		return true;
	}

	// Check if it's a localized version of allowed paths
	return languages.some((lang) =>
		basePaths.some(
			(path) =>
				path !== "/"
					? normalizedPath === `/${lang}${path}` // not index "/" path with other languages
					: normalizedPath === `/${lang}/`, // index "/" path with other languages
		),
	);
}
