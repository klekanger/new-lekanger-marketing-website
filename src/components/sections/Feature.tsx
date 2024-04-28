"use client";
import { CustomPortableText } from "@/lib/CustomPortableText";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

export default function Feature({ content }: { content: any }) {
	if (!content || !content?.data) {
		console.error("Missing heroText from sanity");
		return null;
	}

	const { subtitle, title, bodytext, featureboxes, showFeature } = content.data;

	return (
		<>
			{showFeature && (
				<motion.section
					initial={{ opacity: 0, transform: "translateY(75px)" }}
					whileInView={{ opacity: 1, transform: "translateY(0px)" }}
					viewport={{ once: true }}
					className="py-16 sm:py-24 border-brand-secondary border rounded-large my-16"
				>
					<div className="mx-auto max-w-7xl px-6 lg:px-8  ">
						<div className="mx-auto max-w-2xl lg:text-center">
							<div className="text-base font-semibold leading-7 text-brand-accent">
								{subtitle}
							</div>
							<h2 className="text-3xl md:text-4xl">{title}</h2>
							<div className="mt-6 text-lg leading-8 ">
								{bodytext && <CustomPortableText value={bodytext} />}
							</div>
						</div>
						<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
							<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-2 md:gap-y-16">
								{featureboxes.map((feature: any) => (
									<div key={feature._key} className="relative pl-16">
										<h3 className="text-xl py-0">
											<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-secondary">
												<FaCheck
													className="h-6 w-6 text-brand-foreground"
													aria-hidden="true"
												/>
											</div>
											{feature?.title}
										</h3>

										<div className="mt-2">
											<CustomPortableText value={feature?.moduleText} />
										</div>
									</div>
								))}
							</dl>
						</div>
					</div>
				</motion.section>
			)}
		</>
	);
}
