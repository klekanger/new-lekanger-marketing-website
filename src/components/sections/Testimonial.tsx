"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa6";

export default function Testimonial({
	quote,
	author,
}: { quote: string; author: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, transform: "translateY(75px)" }}
			whileInView={{ opacity: 1, transform: "translateY(0px)" }}
			viewport={{ once: true }}
			className="max-w-4xl flex flex-col justify-center items-start rounded-large relative text-left m-auto my-16 italic border border-brand-secondary p-[1px]"
		>
			<span className="spark mask-gradient animate-flip absolute before:animate-rotate  inset-0 h-[100%] w-[100%] overflow-hidden rounded-large [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />

			<div className="backdrop inset-[1px] bg-background z-50 rounded-large transition-colors duration-200 group-hover:bg-slate-800">
				<div className="py-6 px-8">
					<FaQuoteLeft className="text-brand-accent" size={40} />
					<p className="text-brand-foreground text-3xl md:text-4xl pl-8">
						{quote}
					</p>

					<footer className="text-right italic text-base">{author}</footer>
				</div>
			</div>
		</motion.div>
	);
}
