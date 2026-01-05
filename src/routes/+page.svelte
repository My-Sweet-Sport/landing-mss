<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import Pricing from "$lib/components/pricing.svelte";
  import FAQ from "$lib/components/faq.svelte";
  import Features from "$lib/components/features.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Hero from "$lib/components/hero.svelte";
</script>

<Hero />
<Features />
<FAQ />
<Pricing />
<Footer />

<!-- export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Footer />
    </>
  );
} -->
