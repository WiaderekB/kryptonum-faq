import { Poppins } from "@/global/fonts";
import "@/global/global.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "FAQ Section",
		template: "%s | FAQ Section",
	},
	description: "Frequently Asked Questions about our services and products",
	generator: "Next.js",
	applicationName: "FAQ Section",
	referrer: "origin-when-cross-origin",
	keywords: ["FAQ", "Questions", "Answers"],
	colorScheme: "dark",
	themeColor: "#2dd282",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={Poppins.className}>{children}</body>
		</html>
	);
}
