import { CogIcon, HomeIcon, MenuIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "settings",
	title: "Innstillinger",
	type: "document",
	icon: CogIcon,
	groups: [
		{
			name: "company",
			title: "Firmainformasjon",
			default: true,
			icon: HomeIcon,
		},
		{
			name: "navbar",
			title: "Navigasjonsmeny",
			icon: MenuIcon,
		},
		{
			name: "meta",
			title: "Meta",
			icon: CogIcon,
		},
	],

	fieldsets: [
		{
			name: "menuItem1",
			title: "Menyelement 1",
			options: { collapsible: true, collapsed: false },
		},
		{
			name: "menuItem2",
			title: "Menyelement 2",
			options: { collapsible: true, collapsed: true },
		},
		{
			name: "menuItem3",
			title: "Menyelement 3",
			options: { collapsible: true, collapsed: true },
		},
	],

	// Uncomment below to have edits publish automatically as you type
	// liveEdit: true,
	fields: [
		// Navbar
		defineField({
			name: "showContactButton",
			title: "Vis kontakt-knappen i navigasjonsmenyen",
			type: "boolean",
			initialValue: true,
			group: "navbar",
		}),

		defineField({
			name: "menuItem1",
			title: " ",
			type: "object",

			fields: [
				defineField({
					name: "active",
					title: "Aktiv",
					type: "boolean",
					initialValue: true,
				}),
				defineField({
					name: "title",
					title: "Tittel",
					type: "string",
				}),
				defineField({
					name: "menuLink",
					title: "Meny-lenke",
					type: "reference",
					to: { type: "page" },
				}),
			],
			fieldset: "menuItem1",
			group: "navbar",
		}),
		defineField({
			name: "menuItem2",
			title: " ",
			type: "object",

			fields: [
				defineField({
					name: "active",
					title: "Aktiv",
					type: "boolean",
					initialValue: true,
				}),
				defineField({
					name: "title",
					title: "Tittel",
					type: "string",
				}),
				defineField({
					name: "menuLink",
					title: "Meny-lenke",
					type: "reference",
					to: { type: "page" },
				}),
			],
			fieldset: "menuItem2",
			group: "navbar",
		}),
		defineField({
			name: "menuItem3",
			title: " ",
			type: "object",

			fields: [
				defineField({
					name: "active",
					title: "Aktiv",
					type: "boolean",
					initialValue: true,
				}),
				defineField({
					name: "title",
					title: "Tittel",
					type: "string",
				}),
				defineField({
					name: "menuLink",
					title: "Meny-lenke",
					type: "reference",
					to: { type: "page" },
				}),
			],
			fieldset: "menuItem3",
			group: "navbar",
		}),

		// Company info
		defineField({
			name: "companyName",
			title: "Firmanavn",
			description: "Firmanavn som skal brukes blant annet i kontaktinformasjon",
			type: "string",
			group: "company",
		}),
		defineField({
			name: "addressLine1",
			title: "Adresselinje 1",
			description: "Adressen som skal brukes blant annet i kontaktinformasjon",
			type: "string",
			group: "company",
		}),
		defineField({
			name: "addressLine2",
			title: "Adresselinje 2",
			type: "string",
			group: "company",
		}),
		defineField({
			name: "companyDescription",
			title: "Kort beskrivelse av firmaet",
			description: "Selgende beskrivelse av firmaet. Til footer.",
			type: "string",
			group: "company",
		}),
		defineField({
			name: "phone",
			title: "Telefonnummer",
			description:
				"Telefonnummer som skal brukes blant annet i kontaktinformasjon",
			type: "string",
			group: "company",
		}),
		defineField({
			name: "email",
			title: "E-post",
			description:
				"E-post-adresse som skal brukes blant annet i kontaktinformasjon",
			type: "string",
			group: "company",
		}),
		defineField({
			name: "organisationNumber",
			title: "Organisasjonsnummer",
			type: "string",
			group: "company",
		}),

		// Meta
		defineField({
			name: "metaTitle",
			title: "Meta - Title-tag",
			description:
				"Forteller søkemotorer og nettsider hva tittelen på nettsiden er.",
			type: "string",
			group: "meta",
		}),
		defineField({
			name: "metaDescription",
			title: "Meta - Description",
			description:
				"Kort beskrivelse av nettsiden for søkemotor-optimalisering. Brukes som standard på forsiden. Undersider får også denne beskrivelsen hvis ikke sidetittel finnes.",
			type: "string",
			group: "meta",
		}),
		defineField({
			name: "metaKeywords",
			title: "Meta - Keywords",
			description: "Liste med nøkkelord for SEO. Separert med komma.",
			type: "string",
			group: "meta",
		}),

		defineField({
			type: "image",
			name: "metaOgImage",
			title: "OpenGraph Image ",
			description:
				"Standardbilde for deling i sosiale medier. Helst 1200 x 630 piksler.",
			group: "meta",
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Endre innstillinger for nettsiden",
			};
		},
	},
});
