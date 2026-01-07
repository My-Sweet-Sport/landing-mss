<script lang="ts">
  import { base } from "$app/paths";
  import { ModeWatcher } from "mode-watcher";
  let { children } = $props();

  import "./layout.css";
</script>

<svelte:head><link rel="icon" href={`${base}/favicon-2.ico`} /></svelte:head>
<ModeWatcher defaultMode={"dark"} />

{@render children()}
