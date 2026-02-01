<script lang="ts">
  import { base } from "$app/paths";
  import { t } from 'svelte-i18n';
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
    { href: `${base}/`, labelKey: "nav.home" },
    { href: `${base}/#features`, labelKey: "nav.features" },
    { href: `${base}/#faq`, labelKey: "nav.faq" },
    { href: `${base}/#testimonials`, labelKey: "nav.testimonials" },
    { href: `${base}/#pricing`, labelKey: "nav.pricing" },
    { href: "https://app.mysweetsport.com/showcase", labelKey: "nav.showcase" },
    { href: "https://app.mysweetsport.com/myiq", labelKey: "nav.myiq" },
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
          >{$t(link.labelKey)}</NavigationMenuLink
        >
      </NavigationMenuItem>
    {/each}
  </NavigationMenuList>
</NavigationMenuRoot>
