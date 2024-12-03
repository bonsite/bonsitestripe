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
				{/* Link com Icone e T tulo */}
				<YnsLink href="/" className="flex items-center gap-2">
					{/* Icone de imagem */}
					<Image
						src="/icon.png" // Caminho da pasta p blica
						alt=" Icone do Bonsite"
						width={42} // Ajuste o tamanho como necess rio
						height={42}
						className="rounded" // Estiliza o opcional
					/>
					{/* T tulo */}
					<SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold text-[#1f5c37]">Bonsite</SeoH1>
				</YnsLink>

				{/* Menu de navega o */}
				<div className="max-w-full flex flex-shrink w-auto sm:mr-auto overflow-auto max-sm:order-2">
					<NavMenu />
				</div>
				{/* Navega o de pesquisa */}
				<div className="mr-3 ml-auto sm:ml-0">
					<SearchNav />
				</div>
				{/* Resumo do carrinho */}
				<CartSummaryNav />
			</div>
		</header>
	);
};
