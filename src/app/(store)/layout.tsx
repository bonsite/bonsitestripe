// layout.tsx
import "@/app/globals.css";
import { Footer } from "@/ui/footer/footer";
import { JsonLd, accountToWebsiteJsonLd } from "@/ui/json-ld";
import { TooltipProvider } from "@/ui/shadcn/tooltip";
import * as Commerce from "commerce-kit";
import type React from "react";

// Define the Nav component prop types
interface NavProps {
	items: { label: string; href: string }[];
}

export const Nav: React.FC<NavProps> = ({ items }) => {
	return (
		<nav>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						<a href={item.href}>{item.label}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default async function StoreLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	const accountResult = await Commerce.accountGet();
	const logoLink =
		accountResult?.logo?.links?.data.find((link) => !link.expired) ||
		(accountResult?.logo?.id ? await Commerce.fileGet(accountResult.logo.id) : null);

	return (
		<>
			<Nav
				items={[
					{ label: "Início", href: "/" }, // Translated and kept only "Home"
				]}
			/>
			<TooltipProvider>
				<main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-2 sm:px-6 lg:px-8">
					{children}
					{modal}
				</main>
				<Footer />
			</TooltipProvider>
			<JsonLd
				jsonLd={accountToWebsiteJsonLd({
					account: accountResult?.account,
					logoUrl: logoLink?.url,
				})}
			/>
		</>
	);
}
