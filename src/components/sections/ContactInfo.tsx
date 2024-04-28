"use client";

import { motion } from "framer-motion";
import {
	FaEnvelope,
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaPhone,
	FaTwitter,
} from "react-icons/fa";

export default function ContactInfo({
	title = "Her finner du meg",
	subtitle = "...eller stikk innom for en kaffe!",
}: { title?: string; subtitle?: string }) {
	return (
		<motion.section
			initial={{ opacity: 0, transform: "translateY(75px)" }}
			whileInView={{ opacity: 1, transform: "translateY(0px)" }}
			viewport={{ once: true }}
			className="py-8"
			id="kontakt"
		>
			<article className="my-8 flex flex-col items-center justify-center text-sm md:my-16">
				<h1 className="pb-8 text-center text-brand-accent ">{title}</h1>
				<p className="text-center text-lg">{subtitle}</p>

				<div className="mt-8 grid grid-cols-1 gap-8 pb-8 text-brand-black md:grid-cols-2 lg:grid-cols-3">
					<section className="hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm xl:px-4">
						<a className="cursor-pointer" href="tel:+4740210140">
							<div className="flex justify-center text-4xl">
								<FaPhone aria-hidden="true" />
							</div>
							<div className="text-center">
								<h2 className="text-lg">Telefon</h2>
								<br />
								+47 - 4021 0140
							</div>
						</a>
					</section>

					<section className="hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm xl:px-4">
						<a className="cursor-pointer" href="mailto:kurt@lekanger.no">
							<div className="flex justify-center text-4xl">
								<FaEnvelope aria-hidden="true" />
							</div>
							<div className="text-center">
								<h2 className="text-lg">Epost</h2>
								<br />
								kurt@lekanger.no
							</div>
						</a>
					</section>

					<section className="hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm  xl:px-4">
						<a className="cursor-pointer" href="https://github.com/klekanger">
							<div className="flex justify-center text-4xl">
								<FaGithub aria-hidden="true" />
							</div>
							<div className="break-words text-center">
								<h2 className="text-lg">Github</h2>
								<br />
								github.com/klekanger
							</div>
						</a>
					</section>
					<section className="hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm  xl:px-4">
						<a
							className="cursor-pointer"
							href="https://linkedin.com/company/lekanger"
						>
							<div className="flex justify-center text-4xl">
								<FaLinkedin aria-hidden="true" />
							</div>
							<div className="break-words text-center">
								<h2 className="text-lg">LinkedIn firma</h2>
								<br />
								linkedin.com/company/lekanger
							</div>
						</a>
					</section>
					<section className="hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm  xl:px-4">
						<a
							className="cursor-pointer"
							href="https://linkedin.com/in/lekanger"
						>
							<div className="flex justify-center text-4xl">
								<FaLinkedin aria-hidden="true" />
							</div>
							<div className="break-words text-center">
								<h2 className="text-lg">LinkedIn personlig</h2>
								<br />
								linkedin.com/in/lekanger
							</div>
						</a>
					</section>
					<section className="hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm xl:px-4">
						<a className="cursor-pointer" href="https://twitter.com/lekanger">
							<div className="flex justify-center text-4xl">
								<FaTwitter aria-hidden="true" />
							</div>
							<div className="break-words text-center">
								<h2 className="text-lg">Twitter</h2>
								<br />
								twitter.com/lekanger
							</div>
						</a>
					</section>
				</div>
			</article>
		</motion.section>
	);
}
