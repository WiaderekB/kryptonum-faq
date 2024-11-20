import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = process.env.PUBLIC_URL;
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: baseUrl,
	};
}
