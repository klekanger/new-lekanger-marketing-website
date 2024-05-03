"use client";

import CompanyLogo from "@/components/CompanyLogo";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";

import { motion } from "framer-motion";
import { CheckSquare, MailOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	// biome-ignore lint/correctness/useExhaustiveDependencies: Necessary to always close modal when clicking on a menu link
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="h-32"
		>
			<Navbar
				className="py-2 max-w-7xl m-auto justify-between"
				classNames={{
					wrapper: "px-2 sm:px-6",
				}}
				onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}
				isMenuOpen={isMenuOpen}
				shouldHideOnScroll
				maxWidth="full"
			>
				<NavbarBrand className="pt-8">
					<Link href="/" className="space-y-2 w-2/3 sm:w-3/4">
						<CompanyLogo width="275" />
					</Link>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-4 p-0" justify="end">
					<NavbarItem
						isActive={pathname.startsWith("/mine-tjenester")}
						className="self-end"
					>
						<Link color="foreground" href="/mine-tjenester">
							Tjenester
						</Link>
					</NavbarItem>
					<NavbarItem
						isActive={pathname.startsWith("/prosjekter")}
						className="self-end"
					>
						<Link color="foreground" href="/prosjekter">
							Prosjekter
						</Link>
					</NavbarItem>

					<NavbarItem
						isActive={pathname.startsWith("/kontakt-meg")}
						className="self-end"
					>
						<Link color="foreground" href="/kontakt-meg">
							<span className=" bg-brand-secondary2/40 rounded-full p-4 ml-8 font-semibold">
								Kontakt meg
							</span>
						</Link>
					</NavbarItem>
				</NavbarContent>

				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Lukk meny" : "Åpne meny"}
					className="sm:hidden mr-2 mt-4"
				/>
				<NavbarMenu className="w-full pt-32 space-y-4 bg-brand-background">
					<NavbarMenuItem
						isActive={pathname.startsWith("/mine-tjenester")}
						className="self-center list-none"
					>
						<Link
							color="foreground"
							href="/mine-tjenester"
							className="flex gap-2"
						>
							<CheckSquare />
							Tjenester
						</Link>
					</NavbarMenuItem>

					<NavbarMenuItem
						isActive={pathname.startsWith("/prosjekter")}
						className="self-center list-none"
					>
						<Link color="foreground" href="/prosjekter" className="flex gap-2">
							<CheckSquare />
							Prosjekter
						</Link>
					</NavbarMenuItem>

					<NavbarMenuItem
						isActive={pathname.startsWith("/kontakt-meg")}
						className="self-center list-none"
					>
						<Link color="foreground" href="/kontakt-meg" className="flex gap-2">
							<MailOpen />
							Kontakt meg
						</Link>
					</NavbarMenuItem>

					<address className="not-italic text-center sm:text-left pt-8 text-brand-foreground">
						<p>
							<strong>Lekanger tekst og kode</strong>
						</p>
						<p>
							<span>
								<strong>E-post: </strong>
							</span>
							<a href="mailto:post@ekstrahjelp1.no">post@lekanger.no</a>
						</p>
						<p>
							<span>
								<strong>Telefon: </strong>
							</span>
							<a href="tel:+4740080046">+47 4021 0140</a>
						</p>
					</address>
				</NavbarMenu>
			</Navbar>
		</motion.div>
	);
}
