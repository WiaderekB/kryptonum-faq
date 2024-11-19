import { Poppins } from "@/global/fonts";
import "@/global/global.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "FAQ Section",
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
