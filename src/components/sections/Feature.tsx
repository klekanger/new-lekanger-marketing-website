"use client";
import { FaCheck } from "react-icons/fa6";

import { motion } from "framer-motion";

const features = [
	{
		name: "Innhold som fungerer",
		description:
			"Med mer enn 30 års erfaring som journalist, redaktør og senior kommunikasjonsrådgiver vet jeg hva slags innhold som fungerer og kan tilpasse innholdet for din målgruppe.",
		icon: FaCheck,
	},
	{
		name: "Søkemotoroptimalisering",
		description:
			"Det hjelper ikke med godt innhold, hvis ingen finner det. Jeg hjelper deg med SEO (optimalisering for søkemotorer).",
		icon: FaCheck,
	},
];

export default function Feature() {
	return (
		<motion.section
			initial={{ opacity: 0, transform: "translateY(75px)" }}
			whileInView={{ opacity: 1, transform: "translateY(0px)" }}
			viewport={{ once: true }}
			className="py-16 sm:py-24 border-brand-secondary border rounded-large my-16"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8  ">
				<div className="mx-auto max-w-2xl lg:text-center">
					<div className="text-base font-semibold leading-7 text-brand-accent">
						Tekst eller kode? Jeg hjelper deg med begge deler.
					</div>
					<h2 className="text-3xl md:text-4xl">
						En nettside trenger godt innhold
					</h2>
					<p className="mt-6 text-lg leading-8 ">
						Kombinasjonen utvikler og innholdsprodusent gjør at jeg ikke bare
						kan levere den tekniske implementeringen av nettsidene, men også
						innholdet du trenger for at nettsidene skal skinne. Enten det er
						helt nytt innhold, eller forbedringer av eksisterende innhold.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<h3 className="text-xl py-0">
									<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-secondary">
										<feature.icon
											className="h-6 w-6 text-brand-foreground"
											aria-hidden="true"
										/>
									</div>
									{feature.name}
								</h3>
								<div className="mt-2">{feature.description}</div>
							</div>
						))}
					</dl>
				</div>
			</div>
		</motion.section>
	);
}
