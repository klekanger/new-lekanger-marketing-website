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
					<Link
						href="/"
						className="space-y-2 w-2/3 sm:w-3/4"
						data-attr="navbar-logo"
					>
						<CompanyLogo width="275" />
					</Link>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-4 p-0" justify="end">
					<NavbarItem
						isActive={pathname.startsWith("/services")}
						className="self-end"
					>
						<Link
							color="foreground"
							href="/page/tjenester"
							data-attr="navbar-services"
						>
							Tjenester
						</Link>
					</NavbarItem>
					<NavbarItem
						isActive={pathname.startsWith("/page/kundecaser")}
						className="self-end"
					>
						<Link
							color="foreground"
							href="/page/kundecaser"
							data-attr="navbar-kundecaser"
						>
							Kundecaser
						</Link>
					</NavbarItem>

					<NavbarItem
						isActive={pathname.startsWith("/#kontakt")}
						className="self-end"
					>
						<Link
							color="foreground"
							href="/#kontakt"
							data-attr="navbar-contact"
						>
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
				<NavbarMenu className="w-full pt-32 space-y-4">
					<NavbarMenuItem
						isActive={pathname.startsWith("/services")}
						className="self-center list-none"
					>
						<Link
							color="foreground"
							href="/page/tjenester"
							className="flex gap-2"
							data-attr="navbar-workers"
						>
							<CheckSquare />
							Tjenester
						</Link>
					</NavbarMenuItem>

					<NavbarMenuItem
						isActive={pathname.startsWith("/page/kundecaser")}
						className="self-center list-none"
					>
						<Link
							color="foreground"
							href="/page/kundecaser"
							className="flex gap-2"
							data-attr="navbar-employers"
						>
							<CheckSquare />
							Kundecaser
						</Link>
					</NavbarMenuItem>

					<NavbarMenuItem
						isActive={pathname.startsWith("/#kontakt")}
						className="self-center list-none"
					>
						<Link
							color="foreground"
							href="/#kontakt"
							className="flex gap-2"
							data-attr="navbar-about-us"
						>
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