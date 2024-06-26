import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { ViewTransitions } from "next-view-transitions";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Teddy Malhan",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en">
				<body className={`${montserrat.className} text-fg`}>
					<Nav />
					<div className="mx-auto w-[750px] max-w-full px-5 pb-10 pt-28">
						{children}
					</div>
				</body>
			</html>
		</ViewTransitions>
	);
}
