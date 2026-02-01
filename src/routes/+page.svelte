<script lang="ts">
  import { t } from 'svelte-i18n';
  import FAQ from "$lib/components/faq.svelte";
  import Features from "$lib/components/features.svelte";
  import Hero from "$lib/components/hero.svelte";
  import Pricing from "$lib/components/pricing.svelte";
  import Testimonial from "$lib/components/testimonials.svelte";
</script>

<svelte:head>
  <title>{$t('meta.title')}</title>
  <meta
    name="description"
    content={$t('meta.description')}
  />
</svelte:head>

<Hero />
<Features />
<FAQ />
<!-- <Testimonial /> -->
<Pricing />
