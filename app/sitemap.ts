import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.PUBLIC_URL;

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			priority: 1,
		},
	];
}
