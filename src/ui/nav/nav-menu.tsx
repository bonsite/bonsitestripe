import { NavMobileMenu } from "@/ui/nav/nav-mobile-menu.client";
import Link from "next/link";

const links = [
	{
		label: "Início",
		href: "/",
	},
	{
		label: "Frutíferas",
		href: "/category/frutifera",
	},
	{
		label: "Floríferas",
		href: "/category/florifera",
	},
];

{
	/* <Drawer>
  <DrawerTrigger>Abrir</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Voc  est   absolutamente certo?</DrawerTitle>
      <DrawerDescription>
        Essa a o n o pode ser desfeita. Isso ir  deletar permanentemente sua conta e remover seus dados dos nossos servidores.
      </DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer> */
}

export const NavMenu = () => {
	return (
		<>
			<div className="sm:block hidden">
				<ul className="flex flex-row items-center justify-center gap-x-1">
					{links.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="sm:hidden flex items-center">
				<NavMobileMenu>
					<ul className="flex pb-8 flex-col items-stretch justify-center gap-x-1">
						{links.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="group inline-flex h-9 w-full items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</NavMobileMenu>
			</div>
		</>
	);
};
