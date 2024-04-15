import LiveVisualEditing from "@/components/LiveVisualEditing";
import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { draftMode } from "next/headers";
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

export const metadata: Metadata = {
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
