import Footer from "@/components/sections/Footer";
import NavMenu from "@/components/sections/NavMenu";
import { Suspense } from "react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Suspense>
				<NavMenu />
			</Suspense>
			<main className="flex min-h-screen flex-col mx-auto max-w-7xl sm:pt-16 px-2 sm:px-5">
				<Suspense>{children}</Suspense>
			</main>
			<Footer />
		</>
	);
}
