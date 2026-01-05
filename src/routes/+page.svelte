<script lang="ts">
  import Badge from '$lib/components/ui/badge.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import Card from '$lib/components/ui/card.svelte';
  import Input from '$lib/components/ui/input.svelte';
  import { ArrowRight, Check, Sparkles, Star } from 'lucide-svelte';

  const stats = [
    { label: 'Teams', value: '12k+' },
    { label: 'Revenue shipped', value: '$82M' },
    { label: 'Hours saved', value: '3.1M' }
  ];

  const features = [
    {
      title: 'Composable UI',
      description: 'Ship beautiful surfaces faster with shadcn-svelte and sensible defaults that stay out of your way.',
      icon: Sparkles
    },
    {
      title: 'Production ready',
      description: 'Best practices baked in: a11y, keyboard navigation, dark mode, and responsive layouts by default.',
      icon: Check
    },
    {
      title: 'Analytics native',
      description: 'Track every interaction with first-class instrumentation hooks so you always know what resonates.',
      icon: Star
    }
  ];

  const testimonials = [
    {
      quote:
        'Switching to Mirage cut our launch timeline in half. The components feel polished without boxing us in.',
      name: 'Lena Carter',
      title: 'VP Product, Drift'
    },
    {
      quote: 'The dark aesthetic and gradients look premium and required zero effort from our design team.',
      name: 'Sami Ortega',
      title: 'Founder, Northwind'
    },
    {
      quote: 'Everything is just Svelte runes, so onboarding new engineers was effortless.',
      name: 'Jae Park',
      title: 'CTO, Aurora'
    }
  ];

  const faqs = [
    {
      question: 'Is this really using runes?',
      answer: 'Yes. Local state, animations, and interactions are powered by the new runes API for predictable reactivity.'
    },
    {
      question: 'Can I swap the color system?',
      answer:
        'Absolutely. Tokens live in Tailwind so you can replace the purple glow with your own palette in minutes.'
    },
    {
      question: 'Do I need external UI kits?',
      answer: 'No. The included shadcn-svelte primitives cover buttons, badges, cards, inputs, and more.'
    }
  ];

  let email = $state('');
  let activeFaq = $state<number | null>(0);

  const toggleFaq = (index: number) => {
    activeFaq = activeFaq === index ? null : index;
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    alert(`Thanks for joining, ${email || 'friend'}!`);
  };
</script>

<div class="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
  <div class="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
  <div class="pointer-events-none absolute right-16 top-40 h-60 w-60 rounded-full bg-indigo-400/30 blur-3xl" />

  <main class="section-container relative flex min-h-screen flex-col gap-20 py-16">
    <header class="flex flex-col gap-12 pt-6">
      <nav class="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
        <div class="flex items-center gap-2 text-lg font-semibold">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/40">
            <Sparkles class="h-5 w-5" />
          </div>
          Mirage Studio
        </div>
        <div class="flex items-center gap-3 text-sm font-medium text-slate-200">
          <a class="hidden hover:text-white sm:inline" href="#features">Product</a>
          <a class="hidden hover:text-white sm:inline" href="#pricing">Pricing</a>
          <a class="hidden hover:text-white sm:inline" href="#faq">FAQ</a>
          <Button size="sm" variant="ghost" class="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button size="sm">
            Get started
          </Button>
        </div>
      </nav>

      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div class="space-y-6">
          <Badge>New in SvelteKit</Badge>
          <h1 class="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Design-forward landing page kit built with shadcn-svelte.
          </h1>
          <p class="max-w-2xl text-lg text-slate-300">
            Recreate the signature gradient-heavy look from the original shadcn UI landing page—now powered by SvelteKit
            with runes. Launch faster with reusable sections, consistent spacing, and production-ready components.
          </p>
          <div class="flex flex-wrap items-center gap-3">
            <Button size="lg">
              Start building
              <ArrowRight class="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Live preview
            </Button>
          </div>
          <div class="grid grid-cols-3 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            {#each stats as stat}
              <div>
                <div class="text-2xl font-bold text-white">{stat.value}</div>
                <div class="text-sm text-slate-400">{stat.label}</div>
              </div>
            {/each}
          </div>
        </div>

        <div class="relative">
          <div class="absolute -left-10 -top-6 h-24 w-24 rounded-full bg-indigo-500/20 blur-3xl" />
          <div class="absolute -right-12 bottom-0 h-28 w-28 rounded-full bg-purple-400/30 blur-3xl" />
          <Card class="relative overflow-hidden border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-black/40 p-0">
            <div class="flex items-center justify-between border-b border-white/10 p-5">
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-xl bg-purple-500/20" />
                <div>
                  <p class="text-sm text-slate-300">Campaign performance</p>
                  <p class="text-lg font-semibold text-white">Launch Week</p>
                </div>
              </div>
              <Badge class="bg-emerald-500/15 text-emerald-100">+38%</Badge>
            </div>
            <div class="grid grid-cols-2 gap-4 p-6">
              <div class="rounded-xl bg-black/40 p-4">
                <p class="text-xs uppercase text-slate-400">Reach</p>
                <p class="text-2xl font-semibold text-white">1.2M</p>
                <p class="text-sm text-emerald-300">▲ 12% vs last week</p>
              </div>
              <div class="rounded-xl bg-black/40 p-4">
                <p class="text-xs uppercase text-slate-400">Engagement</p>
                <p class="text-2xl font-semibold text-white">84%</p>
                <p class="text-sm text-emerald-300">▲ 6% uplift</p>
              </div>
              <div class="col-span-2 rounded-xl bg-black/40 p-4">
                <p class="text-xs uppercase text-slate-400">Momentum</p>
                <div class="mt-3 h-32 rounded-lg bg-gradient-to-r from-purple-500/40 via-indigo-500/30 to-cyan-400/30" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </header>

    <section class="space-y-10" id="features">
      <div class="flex flex-col gap-3">
        <Badge>Sections</Badge>
        <h2 class="text-3xl font-semibold text-white sm:text-4xl">Everything you need to ship a premium landing</h2>
        <p class="max-w-2xl text-slate-300">
          Mix and match sections—hero, features, testimonials, pricing, FAQ—and stay on-brand with a cohesive gradient
          system and glowy accents.
        </p>
      </div>
      <div class="grid gap-6 lg:grid-cols-3">
        {#each features as feature}
          <Card class="flex flex-col gap-4 border-white/15">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-purple-200">
              <svelte:component this={feature.icon} class="h-6 w-6" />
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-semibold text-white">{feature.title}</h3>
              <p class="text-sm text-slate-300">{feature.description}</p>
            </div>
            <a class="text-sm font-semibold text-purple-200 hover:text-purple-100" href="#">
              Explore
              <ArrowRight class="ml-1 inline-block h-4 w-4 align-middle" />
            </a>
          </Card>
        {/each}
      </div>
    </section>

    <section class="space-y-10">
      <div class="flex flex-col gap-3">
        <Badge>Trusted</Badge>
        <h2 class="text-3xl font-semibold text-white sm:text-4xl">Built for modern product teams</h2>
        <p class="max-w-2xl text-slate-300">
          Mirage Studio mirrors the original shadcn landing aesthetic with thoughtful motion and balanced whitespace.
        </p>
      </div>
      <div class="grid gap-6 lg:grid-cols-3">
        {#each testimonials as testimonial}
          <Card class="border-white/15 bg-white/5">
            <p class="text-lg text-white">“{testimonial.quote}”</p>
            <div class="mt-6 flex items-center justify-between text-sm text-slate-300">
              <div>
                <div class="font-semibold text-white">{testimonial.name}</div>
                <div>{testimonial.title}</div>
              </div>
              <div class="flex items-center gap-1 text-amber-300">
                {#each Array(5) as _, i}
                  <Star class={`h-4 w-4 ${i === 4 ? 'opacity-70' : ''}`} />
                {/each}
              </div>
            </div>
          </Card>
        {/each}
      </div>
    </section>

    <section class="space-y-10" id="pricing">
      <div class="flex flex-col gap-3">
        <Badge>Pricing</Badge>
        <h2 class="text-3xl font-semibold text-white sm:text-4xl">Simple, predictable plans</h2>
        <p class="max-w-2xl text-slate-300">
          No usage-based surprises. Everything you need to launch and iterate on your next landing page.
        </p>
      </div>
      <div class="grid gap-6 lg:grid-cols-3">
        <Card class="flex flex-col gap-6">
          <div>
            <p class="text-sm uppercase text-slate-400">Starter</p>
            <p class="text-3xl font-bold text-white">Free</p>
          </div>
          <ul class="space-y-3 text-sm text-slate-300">
            <li class="flex items-center gap-2"><Check class="h-4 w-4 text-emerald-300" />SvelteKit + runes base</li>
            <li class="flex items-center gap-2"><Check class="h-4 w-4 text-emerald-300" />Core UI components</li>
            <li class="flex items-center gap-2"><Check class="h-4 w-4 text-emerald-300" />Email capture</li>
          </ul>
          <Button>Start for free</Button>
        </Card>
        <Card class="flex flex-col gap-6 border-purple-400/40 bg-gradient-to-b from-purple-500/10 via-purple-500/5 to-black/40">
          <div class="flex items-baseline justify-between">
            <div>
              <p class="text-sm uppercase text-purple-200">Pro</p>
              <p class="text-3xl font-bold text-white">$29</p>
            </div>
            <Badge class="bg-purple-500/30 text-purple-50">Popular</Badge>
          </div>
          <ul class="space-y-3 text-sm text-slate-200">
            <li class="flex items-center gap-2"><Check class="h-4 w-4 text-emerald-300" />All starter features</li>
            <li class="flex items-center gap-2"><Check class="h-4 w-4 text-emerald-300" />Full section library</li>
            <li class="flex items-center gap-2"><Check class="h-4 w-4 text-emerald-300" />Analytics hooks</li>
            <li class="flex items-center gap-2"><Check class="h-4 w-4 text-emerald-300" />Priority support</li>
          </ul>
          <Button size="lg">Upgrade</Button>
        </Card>
        <Card class="flex flex-col gap-6">
          <div>
            <p class="text-sm uppercase text-slate-400">Enterprise</p>
            <p class="text-3xl font-bold text-white">Custom</p>
          </div>
          <ul class="space-y-3 text-sm text-slate-300">
            <li class="flex items-center gap-2"><Check class="h-4 w-4 text-emerald-300" />Design partner program</li>
            <li class="flex items-center gap-2"><Check class="h-4 w-4 text-emerald-300" />Custom integrations</li>
            <li class="flex items-center gap-2"><Check class="h-4 w-4 text-emerald-300" />Dedicated architect</li>
          </ul>
          <Button variant="outline">Talk to us</Button>
        </Card>
      </div>
    </section>

    <section class="grid gap-10 lg:grid-cols-[1.2fr,1fr]" id="faq">
      <div class="space-y-6">
        <Badge>FAQ</Badge>
        <h2 class="text-3xl font-semibold text-white sm:text-4xl">Answers at a glance</h2>
        <p class="max-w-2xl text-slate-300">
          Built with SvelteKit, Tailwind, and shadcn-svelte primitives. Swap content, tweak tokens, and ship.
        </p>
        <div class="space-y-4">
          {#each faqs as faq, index}
            <Card class="border-white/10 bg-white/5">
              <button class="flex w-full items-center justify-between text-left" on:click={() => toggleFaq(index)}>
                <div class="text-base font-semibold text-white">{faq.question}</div>
                <span class="text-sm text-purple-200">{activeFaq === index ? '−' : '+'}</span>
              </button>
              {#if activeFaq === index}
                <p class="mt-3 text-sm text-slate-300">{faq.answer}</p>
              {/if}
            </Card>
          {/each}
        </div>
      </div>
      <Card class="flex flex-col gap-4 border-purple-400/30 bg-gradient-to-b from-purple-500/10 via-purple-500/5 to-black/40">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-xl bg-purple-500/30" />
          <div>
            <p class="text-sm text-slate-200">Weekly digest</p>
            <p class="text-lg font-semibold text-white">Stay ahead of launches</p>
          </div>
        </div>
        <p class="text-sm text-slate-200">
          Join 10k+ founders receiving curated updates on new components, best practices, and shadcn-svelte recipes.
        </p>
        <form class="space-y-3" on:submit|preventDefault={handleSubmit}>
          <Input
            type="email"
            placeholder="you@example.com"
            bind:value={email}
            required
          />
          <Button class="w-full" type="submit">Subscribe</Button>
          <p class="text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
        </form>
      </Card>
    </section>
  </main>

  <footer class="border-t border-white/10 bg-black/40 py-10">
    <div class="section-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-2 text-lg font-semibold text-white">
        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
          <Sparkles class="h-4 w-4" />
        </div>
        Mirage Studio
      </div>
      <div class="flex flex-wrap items-center gap-4 text-sm text-slate-300">
        <span>Inspired by shadcn/ui</span>
        <span>Built with SvelteKit + runes</span>
        <span>Shadcn-svelte components</span>
      </div>
    </div>
  </footer>
</div>
