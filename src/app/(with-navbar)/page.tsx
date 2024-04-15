import HomePage from "@/components/pages/home/HomePage";
import { HomePagePayload, HomePageProps } from "@/types";
import { QueryResponseInitial } from "@sanity/react-loader";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import Link from "next/link";
import { studioUrl } from "../../../sanity/env";
import { loadHomePage } from "../../../sanity/loader/loadQuery";

const HomePagePreview = dynamic(
	() => import("@/components/pages/home/HomePagePreview"),
);

export default async function Home() {
	const initial = await loadHomePage();

	if (draftMode().isEnabled) {
		return <HomePagePreview initial={initial} />;
	}

	if (!initial.data) {
		return (
			<div className="text-center">
				Du mangler innhold for å kunne vise forsiden.{" "}
				<Link href={`${studioUrl}/desk/home`} className="underline">
					Opprett innhold nå
				</Link>
			</div>
		);
	}

	return <HomePage data={initial?.data} />;
}
