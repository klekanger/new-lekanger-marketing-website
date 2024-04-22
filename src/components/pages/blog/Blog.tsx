import BackButton from "@/components/ui/Backbutton";
import { CustomPortableText } from "@/lib/CustomPortableText";
import { formatDate } from "@/lib/formatDate";
import { urlForImage } from "@/sanity/lib/image";
import type { BlogProps } from "@/types";
import Image from "next/image";

export default function Blog(props: BlogProps) {
	const { data } = props;

	if (!data) {
		console.error("Missing data from sanity");
		return null;
	}

	const date = formatDate({
		created: data?._createdAt || "",
		updated: data?._updatedAt,
	});

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
					<div className="ml-0 pl-0 pt-4 text-sm italic text-slate-400">
						{date && <div>{date}</div>}
					</div>
					{!data && (
						<p className="text-danger text-center">Siden ikke funnet (404)</p>
					)}
				</div>
			</article>
		</section>
	);
}
