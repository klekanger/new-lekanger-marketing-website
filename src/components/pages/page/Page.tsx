"use client";

import { CustomPortableText } from "@/lib/CustomPortableText";
import { urlForImage } from "@/sanity/lib/image";
import type { PageProps } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Page(props: PageProps) {
	const { data } = props;

	if (!data) {
		console.error("Missing data from sanity");
		return null;
	}

	let imageUrl: string | null = null;
	let imageAlt = "";
	if ("mainImage" in data && data?.mainImage) {
		imageUrl = urlForImage(data?.mainImage);
		imageAlt = data?.mainImage?.alt;
	}

	return (
		<div className="grid grid-cols-12 pt-8 sm:pt-0 mb:pb-16">
			<div className="col-span-12 sm:col-span-10 sm:col-start-2 ">
				<section className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 lg:grid-cols-2 lg:grid-flow-col gap-8 lg:gap-8 py-8 sm:mb-4 items-start">
					<div className="row-span-2 lg:row-span-1 col-span-1">
						{data?.subtitle && (
							<motion.div
								style={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 1, ease: "easeOut" }}
								className="pb-4 text-brand-accent text-lg"
							>
								{data?.subtitle}
							</motion.div>
						)}
						<motion.h1
							className="font-black text-4xl lg:text-5xl"
							style={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
						>
							{data?.title}
						</motion.h1>

						{"overview" in data && (
							<motion.div
								style={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
							>
								<CustomPortableText value={data?.overview} />
							</motion.div>
						)}
					</div>

					<motion.div
						style={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						className="row-span-2 lg:row-span-1 col-span-1 rounded-large overflow-hidden aspect-video lg:aspect-[4/3]"
					>
						{imageUrl && (
							<Image
								src={imageUrl}
								width={1600}
								height={900}
								alt={imageAlt}
								priority
								className="rounded-large h-full w-full object-cover object-center"
							/>
						)}
					</motion.div>
				</section>

				<article className="pt-2 lg:pt-8">
					{data?.body && (
						<CustomPortableText
							value={data?.body}
							paragraphClasses="lg:pr-64"
						/>
					)}
				</article>

				{!data && notFound()}
			</div>
		</div>
	);
}
