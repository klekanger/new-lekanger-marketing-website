import LiveVisualEditing from "@/components/LiveVisualEditing";
import { urlForOpenGraphImage } from "@/sanity/lib/utils";
import { loadSettings } from "@/sanity/loader/loadQuery";
import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { draftMode } from "next/headers";
import { Image } from "sanity";
import type { Settings } from "../../sanity.types";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-inter",
});

const interTight = Inter_Tight({
	weight: ["400", "700", "900"],
	subsets: ["latin"],
	variable: "--font-inter-tight",
});

/* export const metadata: Metadata = {
	metadataBase: new URL("https://www.lekanger.no"),
	title:
		"Lekanger tekst og kode - webutvikling, kommunikasjon og tekstproduksjon",
	description:
		"En utvikler som kan skrive - en skribent som kan utvikle. 30 års erfaring.",
	keywords: [
		"webutvikling",
		"nettsider",
		"programmering",
		"kommunikasjon",
		"tekstforfatter",
	],
	creator: "Kurt Lekanger",
	publisher: "Lekanger tekst og kode",
};
 */
export async function generateMetadata({
	params,
}: { params: { slug: string } }) {
	const { data: metaData } = await loadSettings();

	const title =
		metaData?.metaTitle ??
		"Lekanger tekst og kode - webutvikling og tekstproduksjon";
	const description =
		metaData?.companyDescription ??
		"En utvikler som kan skrive - en skribent som kan utvikle. 30 års erfaring.";
	const ogImage = urlForOpenGraphImage(metaData?.metaOgImage as Image);

	return {
		metadataBase: new URL("https://lekanger.no"),
		title,
		description,
		openGraph: {
			locale: "nb_NO",
			type: "website",
			title,
			description,
			url: "https://lekanger.no",
			siteName: "Lekanger tekst og kode",
			images: ogImage ? [ogImage] : [],
		},
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="no" suppressHydrationWarning>
			<body className={`${interTight.variable} ${inter.variable}`}>
				<Providers>
					{children}
					{draftMode().isEnabled && <LiveVisualEditing />}
				</Providers>
			</body>
		</html>
	);
}
