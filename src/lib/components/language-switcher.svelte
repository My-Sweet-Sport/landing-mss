<script lang="ts">
  import { locale, t } from 'svelte-i18n';
  import Languages from "lucide-svelte/icons/languages";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { buttonVariants } from "$lib/components/ui/button/index.js";

  const languages = [
    { code: 'en', key: 'language.english' },
    { code: 'fr', key: 'language.french' }
  ];

  function setLanguage(lang: string) {
    locale.set(lang);
  }
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger
    class={buttonVariants({ variant: "outline", size: "icon" })}
  >
    <Languages class="h-[1.2rem] w-[1.2rem]" />
    <span class="sr-only">{$t('language.selectLanguage')}</span>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    {#each languages as lang}
      <DropdownMenu.Item 
        onclick={() => setLanguage(lang.code)}
        class={$locale === lang.code ? 'bg-accent' : ''}
      >
        {$t(lang.key)}
      </DropdownMenu.Item>
    {/each}
  </DropdownMenu.Content>
</DropdownMenu.Root>
