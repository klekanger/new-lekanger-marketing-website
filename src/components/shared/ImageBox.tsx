import { urlForImage } from "@/sanity/lib/utils";
import type { SanityReference } from "@/types";
import Image from "next/image";

interface ImageBoxProps {
	image?: { asset?: SanityReference };
	alt?: string;
	width?: number;
	height?: number;
	size?: string;
	classesWrapper?: string;
	"data-sanity"?: string;
}

export default function ImageBox({
	image,
	alt = "Cover image",
	width = 3500,
	height = 2000,
	size = "(min-width: 640px) 80vw, 100vw",
	classesWrapper,
	...props
}: ImageBoxProps) {
	const imageUrl =
		image && urlForImage(image)?.height(height).width(width).fit("crop").url();

	return (
		<div className={`${classesWrapper}`}>
			{imageUrl && (
				<Image
					className="rounded-xl w-full h-full "
					alt={alt}
					width={width}
					height={height}
					sizes={size}
					src={imageUrl}
				/>
			)}
		</div>
	);
}
