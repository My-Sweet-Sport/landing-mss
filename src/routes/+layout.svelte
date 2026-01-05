<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "./layout.css";
  import { ModeWatcher } from "mode-watcher";
  import DarkModeSwitch from "$lib/components/darkModeSwitch.svelte";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />
<DarkModeSwitch />

{@render children()}
