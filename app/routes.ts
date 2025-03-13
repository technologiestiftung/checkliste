import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
	route(":lang?/", "./routes/index.tsx"),
	route(":lang?/about/", "./routes/about/index.tsx"),
	route(":lang?/id-card/", "./routes/id-card/index.tsx"),
	route(
		":lang?/certificate-of-conduct/",
		"./routes/certificate-of-conduct/index.tsx",
	),
	route(
		":lang?/residence-registration/",
		"./routes/residence-registration/index.tsx",
	),
] satisfies RouteConfig;
