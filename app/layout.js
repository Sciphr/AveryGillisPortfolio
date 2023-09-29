import "./globals.css";
import Head from "next/head";

export const metadata = {
	title: "Avery Gillis Portfolio",
	description: "Avery Gillis' writing and interview portfolio",
	other: {
		siteName: "Avery Gillis Portfolio",
		siteUrl: "https://avery-gillis-portfolio.vercel.app/",
		"twitter:image":
			"https://media.licdn.com/dms/image/C4E03AQHsQMqKcFHGgw/profile-displayphoto-shrink_800_800/0/1636463668656?e=2147483647&v=beta&t=LNpk1A1e3nA5sDCu9JhP1twI-F7rqGO4WvHn6fvqx48",
		"twitter:card": "summary_large_image",
		"og:url": "https://avery-gillis-portfolio.vercel.app/",
		"og:image":
			"https://media.licdn.com/dms/image/C4E03AQHsQMqKcFHGgw/profile-displayphoto-shrink_800_800/0/1636463668656?e=2147483647&v=beta&t=LNpk1A1e3nA5sDCu9JhP1twI-F7rqGO4WvHn6fvqx48",
		"og:type": "website",
	},
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
