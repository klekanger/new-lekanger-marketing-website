"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Communication() {
	return (
		<motion.section
			initial={{ opacity: 0, transform: "translateY(75px)" }}
			whileInView={{ opacity: 1, transform: "translateY(0px)" }}
			viewport={{ once: true }}
			id="communication"
			className="grid grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2 sm:grid-flow-col gap-8 sm:gap-8 pb-16 sm:pt-8"
		>
			<motion.div className="row-span-2 sm:row-span-1 col-span-1 rounded-3xl overflow-hidden w-full h-full ">
				<Image
					src="/images/pexels-pixabay-414630.webp"
					alt="Nærbilde av Macbook med en kaffekopp ved siden av."
					width={5997}
					height={4000}
					sizes="(min-width: 768px) 50vw, 100vw"
					style={{ objectFit: "cover" }}
					className="h-full w-full hover:scale-105 duration-700"
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
				}}
				/* className="row-span-2 order-first sm:order-last sm:row-span-1 col-span-1 rounded-3xl bg-primary/30 md:p-8 p-4" */
				className="row-span-2 order-first sm:order-last sm:row-span-1 col-span-1"
			>
				<h2 className="text-3xl md:text-4xl pb-8">
					Hjelp med tekst, foto og kommunikasjon
				</h2>

				<p>
					Når vi setter opp en nettside for borettslaget eller sameiet, kan vi
					også hjelpe til med å skrive innhold og ta bilder til nettsidene.
					Eller kanskje du vil produsere mesteparten av teksten selv, og bare
					trenger hjelp til korrektur og språkvask?
				</p>
				<p>
					NaboWeb er et produkt fra Lekanger tekst og kode. Selskapet drives av
					Kurt Lekanger, som har mer enn 30 års erfaring som journalist,
					redaktør og senior kommunikasjonsrådgiver &ndash; i tillegg til at han
					har erfaring fra programvare- og webutvikling.
				</p>
			</motion.div>
		</motion.section>
	);
}
