import "./globals.css";
import Head from "next/head";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Avery Gillis Portfolio",
	description: "Avery Gillis Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</Head>
			<body>{children}</body>
		</html>
	);
}
