import LiveVisualEditing from "@/components/LiveVisualEditing";
import { urlForOpenGraphImage } from "@/sanity/lib/utils";
import { loadSettings } from "@/sanity/loader/loadQuery";
import { Inter, Inter_Tight } from "next/font/google";
import { draftMode } from "next/headers";
import Script from "next/script";
import type { Image } from "sanity";
import type { LocalBusiness, WithContext } from "schema-dts";
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

const jsonLd: WithContext<LocalBusiness> = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Lekanger tekst og kode",
	image: "https://lekanger.no/images/OG_Kurt Lekanger portrett wide.webp",
	description:
		"Moderne nettsider og web-applikasjoner bygget med de nyeste teknologiene. Tekstproduksjon og godt innhold.",
	telephone: "+47 4021 0140",
	email: "post@lekanger.no",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Gartner Moens vei 32A",
		addressLocality: "Askim",
		addressCountry: "Norge",
		postalCode: "1809",
	},
	url: "https://lekanger.no/",
};

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
			<head>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: Needed for JSON-LD
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<Script
				data-domain="lekanger.no"
				src="https://plausible.io/js/script.js"
			/>

			<body className={`${interTight.variable} ${inter.variable}`}>
				<Providers>
					{children}
					{draftMode().isEnabled && <LiveVisualEditing />}
				</Providers>
			</body>
		</html>
	);
}
