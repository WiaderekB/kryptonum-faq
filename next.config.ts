import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	sassOptions: {
		additionalData: `@use "@/global/variables" as *;`,
		silenceDeprecations: ["legacy-js-api"],
	},
};

export default nextConfig;
