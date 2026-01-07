<script lang="ts">
  import { base } from "$app/paths";
  import { ModeWatcher } from "mode-watcher";
  let { children } = $props();

  import "./layout.css";

  import FAQ from "$lib/components/faq.svelte";
  import Features from "$lib/components/features.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Hero from "$lib/components/hero.svelte";
  import Navbar from "$lib/components/navbar/navbar.svelte";
  import Pricing from "$lib/components/pricing.svelte";
  import Testimonial from "$lib/components/testimonials.svelte";
</script>

<svelte:head><link rel="icon" href={`${base}/favicon-2.ico`} /></svelte:head>
<ModeWatcher defaultMode={"dark"} />
<Navbar />
{@render children()}
<Footer />
