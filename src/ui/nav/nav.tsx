import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
import { SearchNav } from "@/ui/nav/search-nav";
import { SeoH1 } from "@/ui/seo-h1";
import { YnsLink } from "@/ui/yns-link";
import Image from "next/image";

export const Nav = async () => {
	return (
		<header className="z-50 py-4 sticky top-0 bg-white/90 backdrop-blur-sm nav-border-reveal">
			<div className="mx-auto flex max-w-7xl items-center gap-2 px-4 flex-row sm:px-6 lg:px-8">
				{/* Link with Icon and Title */}
				<YnsLink href="/" className="flex items-center gap-2">
					{/* Image Icon */}
					<Image
						src="/icon.png" // Public folder path
						alt="Bonsite Icon"
						width={42} // Adjust size as needed
						height={42}
						className="rounded" // Optional styling
					/>
					{/* Title */}
					<SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold text-[#1f5c37]">Bonsite</SeoH1>
				</YnsLink>

				{/* Navigation Menu */}
				<div className="max-w-full flex flex-shrink w-auto sm:mr-auto overflow-auto max-sm:order-2">
					<NavMenu />
				</div>
				{/* Search Navigation */}
				<div className="mr-3 ml-auto sm:ml-0">
					<SearchNav />
				</div>
				{/* Cart Summary */}
				<CartSummaryNav />
			</div>
		</header>
	);
};
