<script lang="ts">
  import FAQ from "$lib/components/faq.svelte";
  import Features from "$lib/components/features.svelte";
  import Hero from "$lib/components/hero.svelte";
  import Pricing from "$lib/components/pricing.svelte";
  import Testimonial from "$lib/components/testimonials.svelte";
</script>

<svelte:head>
  <title>My Sweet Sport</title>
  <meta
    name="description"
    content="Learn what is My Sweet Sport, how it works, and how it can help you grow your sport performance."
  />
</svelte:head>

<Hero />
<Features />
<FAQ />
<Testimonial />
<Pricing />
