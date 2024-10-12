"use client";

import { CustomPortableText } from "@/lib/CustomPortableText";
import { urlForImage } from "@/sanity/lib/utils";
import type { FrontPageServicesProps } from "@/types";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";

const IMG_WIDTH = 600;
const IMG_HEIGHT = 600;

const StyledCard = ({
	title,
	description,
	src,
	alt,
	buttonHref,
	buttonText,
}: {
	title: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	description: any;
	src: string;
	alt: string;
	buttonHref: string;
	buttonText: string;
}) => (
	<Card
		classNames={{
			base: "bg-zinc-800 hover:bg-zinc-700",
			body: "p-0",
		}}
	>
		<CardBody className="grid grid-cols-12 h-full gap-4 group">
			<div className="col-span-6 lg:col-span-6 overflow-hidden">
				{src && (
					<Image
						className="h-full w-full group-hover:scale-110 duration-250	"
						src={src}
						width={IMG_WIDTH}
						height={IMG_HEIGHT}
						style={{ objectFit: "cover" }}
						sizes="16vw"
						alt={alt}
					/>
				)}
			</div>
			<span className="col-span-6 lg:col-span-6 h-full py-4 pr-4 flex flex-col justify-between">
				<div className="pb-6">
					<h3 className="text-xl font-bold pt-0">{title}</h3>
					<CustomPortableText value={description} />
				</div>
				<Button
					as={Link}
					size="sm"
					variant="bordered"
					color="default"
					className="rounded-full border-1 w-24 hover:border-brand-accent text-xs"
					href={`/${buttonHref}`}
				>
					{buttonText}
				</Button>
			</span>
		</CardBody>
	</Card>
);

export default function Services({
	content,
}: { content: FrontPageServicesProps }) {
	if (!content || !content?.data) {
		console.error("Missing infoSectionText from sanity");
		return null;
	}

	const { title, modules = [] } = content.data;

	return (
		<>
			<motion.section
				initial={{ opacity: 0, transform: "translateY(75px)" }}
				whileInView={{ opacity: 1, transform: "translateY(0px)" }}
				viewport={{ once: true }}
				className="py-16 max-w-6xl m-auto"
			>
				<h2 className="text-center md:text-left pb-8">{title}</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{modules.map((module) => {
						const imageUrl =
							module?.image &&
							urlForImage(module.image)
								?.height(IMG_HEIGHT)
								.width(IMG_WIDTH)
								.fit("crop")
								.url();

						return (
							<StyledCard
								key={module._key}
								title={module.title || "Tittel mangler"}
								description={module.moduleText}
								alt={(module.image?.alt as string) ?? ""}
								src={imageUrl || "/images/600x600.svg"}
								buttonHref={module?.moduleLink?.slug?.current || "#"}
								buttonText="Les mer"
							/>
						);
					})}
				</div>
			</motion.section>
		</>
	);
}
