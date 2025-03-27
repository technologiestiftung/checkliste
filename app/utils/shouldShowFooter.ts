export function isRouteWithFooter(pathname: string): boolean {
	// Remove trailing slash for consistency
	const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;

	// Base paths that should show footer (without language prefix)
	const basePaths = ["/", "/about/", "/data-privacy/"];

	const languages = ["en", "es", "fr", "ru", "tr", "ar"];

	if (basePaths.includes(normalizedPath)) {
		return true;
	}

	// Check if it's a localized version of allowed paths
	return languages.some((lang) =>
		basePaths.some((path) =>
			path !== "/"
				? normalizedPath === `/${lang}${path}`
				: normalizedPath === `/${lang}/`,
		),
	);
}
