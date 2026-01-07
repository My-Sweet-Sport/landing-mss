<script lang="ts">
  import { base } from "$app/paths";
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
    { href: `${base}/`, label: "Home" },
    { href: `${base}/#features`, label: "Features" },
    { href: `${base}/#faq`, label: "FAQ" },
    { href: `${base}/#testimonials`, label: "Testimonials" },
    { href: `${base}/#pricing`, label: "Pricing" },
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
