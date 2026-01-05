<script lang="ts">
  import { browser } from "$app/environment";
  import { mode, modeStorageKey } from "mode-watcher";
  import { onMount } from "svelte";

  type LogoProps = {
    class?: string;
  };

  let { class: className }: LogoProps = $props();
</script>

{#if browser && mode.current === "dark"}
  <img
    width="124"
    height="32"
    src="/logo.png"
    alt="My Sweet Sport"
    class={className}
  />
{:else}
  <img
    width="124"
    height="32"
    src="/logo-light.png"
    alt="My Sweet Sport"
    class={className}
  />
{/if}
