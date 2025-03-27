import React from "react";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
	useRouteLoaderData,
	useLocation,
} from "react-router";
import stylesheet from "./index.css?url";
import { getLanguage } from "./i18n/i18n-utils";
import { BerlinHeader } from "./components/berlin-header";
import { Footer } from "~/components/footer";
import { getBerlinFooter } from "~/external-templates/berlin-footer";
import { isPathWithFooter } from "~/utils/is-path-with-footer";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export async function loader() {
	return await getBerlinFooter();
}

export function Layout({ children }: { children: React.ReactNode }) {
	const language = getLanguage();
	const berlinFooter = useRouteLoaderData("root");
	const { pathname } = useLocation();

	return (
		<html lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
			<head>
				<meta charSet="UTF-8" />

				<link
					rel="preload"
					as="font"
					href="/fonts/BerlinTypeWeb-Bold.woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					as="font"
					href="/fonts/BerlinTypeWeb-Regular.woff2"
					crossOrigin="anonymous"
				/>

				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Checkliste</title>
				<Meta />
				<Links />
				{/* <!-- Matomo --> */}
				<script>
					{`var _paq = (window._paq = window._paq || []);
						/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
						_paq.push(["trackPageView"]);
						_paq.push(["enableLinkTracking"]);
						(function () {
						var u = "${import.meta.env.VITE_MATOMO_URL}";
						_paq.push(["setTrackerUrl", u + "matomo.php"]);
						_paq.push(["setSiteId", "${import.meta.env.VITE_MATOMO_SITE_ID}"]);
						var d = document,
						g = d.createElement("script"),
						s = d.getElementsByTagName("script")[0];
						g.async = true;
						g.src = u + "matomo.js";
						s.parentNode.insertBefore(g, s);
					})();`}
				</script>
				{/* <!-- End Matomo Code --> */}
			</head>
			<body>
				<BerlinHeader />
				<main>{children}</main>

				{isPathWithFooter(pathname) && <Footer berlinFooter={berlinFooter} />}

				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({
	// @ts-expect-error just for testing
	error,
}) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
