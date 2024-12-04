import { publicUrl } from "@/env.mjs";
import { ProductList } from "@/ui/products/product-list";
import * as Commerce from "commerce-kit";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const products = await Commerce.productBrowse({ first: 6 });

	return (
		<main>
			<ProductList products={products} />
		</main>
	);
}
