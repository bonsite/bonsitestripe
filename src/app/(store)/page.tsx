import { publicUrl } from "@/env.mjs";
import { getTranslations } from "@/i18n/server";
import AccessoriesImage from "@/images/accessories.jpg";
import ApparelImage from "@/images/apparel.jpg";
import { CategoryBox } from "@/ui/category-box";
import { ProductList } from "@/ui/products/product-list";
import { YnsLink } from "@/ui/yns-link";
import * as Commerce from "commerce-kit";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const products = await Commerce.productBrowse({ first: 6 });
	const t = await getTranslations("/");

	return (
		<main>
			<ProductList products={products} />
		</main>
	);
}
