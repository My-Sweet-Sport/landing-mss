<script lang="ts">
  import { base } from "$app/paths";
  import { ModeWatcher } from "mode-watcher";
  let { children } = $props();

  import "./layout.css";

  import Footer from "$lib/components/footer.svelte";

  import Navbar from "$lib/components/navbar/navbar.svelte";
</script>

<svelte:head><link rel="icon" href={`${base}/favicon-v2.ico`} /></svelte:head>
<ModeWatcher defaultMode={"system"} />
<Navbar />
{@render children()}
<Footer />
