"use client";

import { WavyBackground } from "@/components/ui/wavybackground";
import { cn } from "@/lib/cn";
import type { HeroProps } from "@/types";
import { motion } from "framer-motion";

export default function Hero({
	className,
	content,
}: { className?: string; content: HeroProps }) {
	if (!content || !content?.data) {
		console.error("Missing heroText from sanity");
		return null;
	}

	const { title, subtitle } = content.data;

	console.log("Hero", content);

	return (
		<WavyBackground
			className={cn(
				"px-4 md:px-0 max-w-5xl w-full whitespace-pre-line",
				className,
			)}
			containerClassName="py-8 h-full"
			colors={["#13004e", "#48007e", "#7f00b1", "#FBF0FF", "#F0A000"]}
			backgroundFill="#11001c"
			waveWidth={50}
			blur={10}
			canvasHeight="400px"
			speed="slow"
			waveOpacity={0.2}
		>
			<motion.h1
				className="text-center text-4xl md:text-6xl lg:text-7xl text-brand-copy-light md:text-right py-6"
				style={{ x: 50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.3 }}
			>
				{title}
			</motion.h1>
			<motion.p
				className="text-center text-base md:text-lg text-brand-copy-light md:text-right italic"
				style={{ x: 50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				{subtitle}
			</motion.p>
		</WavyBackground>
	);
}
