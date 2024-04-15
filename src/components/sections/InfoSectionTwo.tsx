"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCheckSquare } from "react-icons/fa";

export default function InfoSectionTwo() {
	return (
		<motion.section
			initial={{ opacity: 0, transform: "translateY(75px)" }}
			whileInView={{ opacity: 1, transform: "translateY(0px)" }}
			viewport={{ once: true }}
			className="grid grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2 sm:grid-flow-col gap-8 sm:gap-8 pt-8 pb-16 my-24"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
				}}
				className="row-span-2  sm:row-span-1 col-span-1"
			>
				<h2 className="text-3xl md:text-4xl pb-8">Moderne nettsider</h2>

				<p>
					Utviklingen innenfor web-teknologi går enormt raskt, og det som var en
					god nettside for få år siden tilfredsstiller ikke nødvendigvis dagens
					krav. Visste du for eksempel at for å komme høyt opp på Google-søk, så
					holder det ikke å bare ha en nettside som ser pen ut og som har godt
					innhold?
				</p>

				<p>
					Kjøper du en nettside fra <em>Lekanger tekst og kode</em> får du en
					løsning bygget med de nyeste teknologiene. Nettsidene er raske og kan
					enkelt utvides med mer funksjonalitet senere. Vi bruker en moderne
					løsning for visuell redigering av innholdet på nettsiden, slik at du
					enkelt kan gjøre endringer selv.
				</p>

				<p>
					Ta kontakt så finner vi ut sammen hvilken løsning som passer best for
					deg og din bedrift.
				</p>
				<Button
					size="md"
					variant="bordered"
					color="default"
					className="rounded-full border-1 mt-4 hover:border-brand-accent"
				>
					Les mer
				</Button>
			</motion.div>

			<motion.div className="row-span-2 sm:row-span-1 col-span-1 rounded-large overflow-hidden w-full h-full aspect-[16/10]">
				<Image
					src="/images/pic-webdesign-abstract.webp"
					alt="Web-design-skisser malt som akvareller"
					width={3000}
					height={2000}
					sizes=" (min-width: 640px) 50vw, 100vw"
					style={{ objectFit: "cover" }}
					className="h-full w-full hover:scale-105 duration-250"
				/>
			</motion.div>
		</motion.section>
	);
}
