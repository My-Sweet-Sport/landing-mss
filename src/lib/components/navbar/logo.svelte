<script lang="ts">
  import { browser } from "$app/environment";
  import { base } from "$app/paths";
  import { mode } from "mode-watcher";

  type LogoProps = {
    class?: string;
  };

  let { class: className }: LogoProps = $props();
</script>

{#if browser && mode.current === "dark"}
  <img
    width="124"
    height="32"
    src={`${base}/logo.png`}
    alt="My Sweet Sport"
    class={className}
  />
{:else}
  <img
    width="124"
    height="32"
    src={`${base}/logo-light.png`}
    alt="My Sweet Sport"
    class={className}
  />
{/if}
