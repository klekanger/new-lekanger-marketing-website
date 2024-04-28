"use client";

import { CustomPortableText } from "@/lib/CustomPortableText";
import { urlForImage } from "@/sanity/lib/utils";
import type { InfoSectionProps } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

const IMG_WIDTH = 3200;
const IMG_HEIGHT = 1800;

export default function InfoSection({
	content,
	component,
}: { content: InfoSectionProps; component: string }) {
	if (!content || !content?.data) {
		console.error("Missing heroText from sanity");
		return null;
	}

	const selectedComponent = content.data?.components?.find(
		(element) => element?.whereToShow === component,
	);

	if (!selectedComponent) {
		console.error("[InfoSection] Missing component prop");
		return null;
	}

	const { title, body, image1, buttonText, showButton } = selectedComponent;

	const imageUrl =
		image1 &&
		urlForImage(image1)?.width(IMG_WIDTH).height(IMG_HEIGHT).fit("crop").url();

	return (
		<motion.section
			initial={{ opacity: 0, transform: "translateY(75px)" }}
			whileInView={{ opacity: 1, transform: "translateY(0px)" }}
			viewport={{ once: true }}
			className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 md:grid-flow-col gap-8 md:gap-8 md:py-16 "
		>
			<div className="row-span-2  md:row-span-1 col-span-1">
				<h2 className="text-3xl md:text-4xl pb-8">{title}</h2>

				{body && <CustomPortableText value={body} />}
			</div>

			<motion.div className="row-span-2 md:row-span-1 col-span-1 rounded-large overflow-hidden w-full h-full aspect-[16/10]">
				{imageUrl && (
					<Image
						src={imageUrl}
						alt={image1?.alt?.toString() ?? ""}
						width={IMG_WIDTH}
						height={IMG_HEIGHT}
						priority
						sizes=" (min-width: 640px) 50vw, 100vw"
						style={{ objectFit: "cover" }}
						className="h-full w-full hover:scale-105 duration-250"
					/>
				)}
			</motion.div>
		</motion.section>
	);
}
