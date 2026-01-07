<script lang="ts">
  import {
    Item as NavigationMenuItem,
    Link as NavigationMenuLink,
    List as NavigationMenuList,
    Root as NavigationMenuRoot,
  } from "$lib/components/ui/navigation-menu/index.js";
  import { cn } from "$lib/utils.js";
  import type { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";

  type NavMenuProps = Omit<NavigationMenuPrimitive.RootProps, "children">;

  const links = [
    { href: ".", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#faq", label: "FAQ" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
    { href: "https://app.mysweetsport.com/showcase", label: "Showcase" },
    { href: "https://app.mysweetsport.com/myiq", label: "myIQ" },
  ];

  let { class: className, ...restProps }: NavMenuProps = $props();
</script>

<NavigationMenuRoot class={cn(className)} {...restProps}>
  <NavigationMenuList
    class="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start"
  >
    {#each links as link}
      <NavigationMenuItem>
        <NavigationMenuLink class=" !text-base" href={link.href}
          >{link.label}</NavigationMenuLink
        >
      </NavigationMenuItem>
    {/each}
  </NavigationMenuList>
</NavigationMenuRoot>
