import React from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import stylesheet from "./index.css?url";
import { getLanguage } from "./i18n/i18n-utils";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export function Layout({ children }: { children: React.ReactNode }) {
	const language = getLanguage();

	return (
		<html lang={language}>
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
				<title>Anmelde-Check</title>
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
				<div>berlin header</div>
				<main>{children}</main>

				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
