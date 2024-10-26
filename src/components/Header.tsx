"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";

const components: { title: string; href: string }[] = [
  {
    title: "Misión",
    href: "/mision",
  },
  {
    title: "Visión",
    href: "/vision",
  },
  {
    title: "Valores",
    href: "/valores",
  },
];

export function Header() {
  return (
    <header className="py-4">
      <NavigationMenuHeader />
    </header>
  );
}

function NavigationMenuHeader() {
  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Academia</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[200px] p-4">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/*  <NavigationMenuItem>
          <a href="/staff">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Staff
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/gallery">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Galeria
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/contact">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contactenos
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href || "#"}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
