<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import DarkModeSwitch from "$lib/components/darkModeSwitch.svelte";
  import Logo from "./logo.svelte";
  import NavMenu from "./nav-menu.svelte";
  import NavigationSheet from "./navigation-sheet.svelte";
</script>

<nav class="h-16 border-b border-accent bg-background">
  <div
    class="h-full mx-auto flex max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6"
  >
    <Logo />

    <NavMenu class="hidden md:block" />

    <div class="flex items-center gap-3">
      <DarkModeSwitch />
      <Button variant="outline" class="hidden sm:inline-flex">Sign In</Button>
      <Button class="xs:inline-flex">Get Started</Button>
      <div class="md:hidden">
        <NavigationSheet />
      </div>
    </div>
  </div>
</nav>
