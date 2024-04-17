import ResponsiveImage from "@/lib/responsiveCustomImage";
import type { FigureProps } from "@/types";

const Figure = (props: FigureProps) => {
	return (
		<div className="my-4 sm:my-8">
			<ResponsiveImage
				imageData={props?.value?.asset}
				alt={props?.value?.alt}
				className="rounded-large shadow-lg"
			/>
			<figcaption className="pt-4 pl-2 text-sm italic text-slate-200">
				{props?.value?.caption}
			</figcaption>
		</div>
	);
};

export default Figure;
