import BackButton from "@/components/ui/Backbutton";
import { CustomPortableText } from "@/lib/CustomPortableText";
import { urlForImage } from "@/sanity/lib/image";
import type { PageProps } from "@/types";
import Image from "next/image";

export default function Page(props: PageProps) {
	const { data } = props;

	if (!data) {
		console.error("Missing data from sanity");
		return null;
	}

	let imageUrl: string | null = null;
	let imageAlt = "";
	if ("mainImage" in data) {
		imageUrl = urlForImage(data?.mainImage);
		imageAlt = data?.mainImage?.alt;
	}

	return (
		<section className="pt-8 sm:pt-0">
			<BackButton />

			<article className="grid grid-cols-12">
				<div className="col-span-12 sm:col-span-10 sm:col-start-2">
					<h1 className="xl:pr-64">{data?.title}</h1>
					{imageUrl && (
						<Image
							src={imageUrl}
							width={1600}
							height={900}
							alt={imageAlt}
							className="rounded-large"
						/>
					)}

					{data && (
						<CustomPortableText
							value={data?.body}
							paragraphClasses="lg:pr-64"
						/>
					)}
					{!data && (
						<p className="text-danger text-center">Siden ikke funnet (404)</p>
					)}
				</div>
			</article>
		</section>
	);
}