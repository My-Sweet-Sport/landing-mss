<script lang="ts">
  import { base } from "$app/paths";
  import { t } from 'svelte-i18n';
  import DarkModeSwitch from "$lib/components/darkModeSwitch.svelte";
  import LanguageSwitcher from "$lib/components/language-switcher.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
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
      <LanguageSwitcher />
      <Button
        variant="outline"
        class="hidden sm:inline-flex"
        href="https://app.mysweetsport.com/login">{$t('nav.signIn')}</Button
      >
      <Button class="xs:inline-flex" href={`${base}/#pricing`}>{$t('nav.getStarted')}</Button>
      <div class="md:hidden">
        <NavigationSheet />
      </div>
    </div>
  </div>
</nav>
