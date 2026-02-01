<script lang="ts">
  import { base } from "$app/paths";
  import { t } from 'svelte-i18n';
  import {
    Card,
    CardContent,
    CardHeader,
  } from "$lib/components/ui/card/index.js";
  import {
    BookCheck,
    ChartPie,
    FolderSync,
    Goal,
    Users,
    Zap,
  } from "lucide-svelte";
  import type { ComponentType } from "svelte";

  type Feature = {
    icon: ComponentType;
    titleKey: string;
    descriptionKey: string;
    screenshotUrl?: string;
  };
  const features: Feature[] = [
    {
      icon: Goal,
      titleKey: "features.improveDecisions.title",
      descriptionKey: "features.improveDecisions.description",
      screenshotUrl: `${base}/questionnaire.jpeg`,
    },
    {
      icon: BookCheck,
      titleKey: "features.newVideos.title",
      descriptionKey: "features.newVideos.description",
      screenshotUrl: `${base}/videos.png`,
    },
    {
      icon: ChartPie,
      titleKey: "features.performanceTracking.title",
      descriptionKey: "features.performanceTracking.description",
      screenshotUrl: `${base}/personalDashboard.png`,
    },
    {
      icon: Users,
      titleKey: "features.trainingTeam.title",
      descriptionKey: "features.trainingTeam.description",
      screenshotUrl: `${base}/dashboard.png`,
    },
    {
      icon: FolderSync,
      titleKey: "features.customVideos.title",
      descriptionKey: "features.customVideos.description",
      screenshotUrl: `${base}/customVideos.png`,
    },
    {
      icon: Zap,
      titleKey: "features.quickSessions.title",
      descriptionKey: "features.quickSessions.description",
      screenshotUrl: `${base}/5min.jpeg`,
    },
  ];
</script>

<section
  id="features"
  class="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6"
>
  <h2
    class="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto"
  >
    {$t('features.title')}
  </h2>
  <div
    class="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
  >
    {#each features as feature (feature.titleKey)}
      <Card
        class="feature-card group relative flex flex-col border rounded-xl overflow-hidden shadow-none"
      >
        <div class="feature-card-grid" aria-hidden="true" />
        <CardHeader class="relative z-10">
          <svelte:component
            this={feature.icon}
            class="feature-card-icon text-muted-foreground transition-colors duration-200 group-hover:text-primary"
          />
          <h4 class="mt-3 text-xl font-bold tracking-tight">
            {$t(feature.titleKey)}
          </h4>
          <p class="mt-1 text-muted-foreground text-sm xs:text-[17px]">
            {$t(feature.descriptionKey)}
          </p>
        </CardHeader>
        <CardContent class="relative z-10 mt-auto px-0 pb-0">
          {#if feature.screenshotUrl}
            <img
              src={feature.screenshotUrl}
              alt={$t(feature.titleKey)}
              class=" h-52 ml-6 rounded-tl-xl aspect-video"
            />
          {/if}
        </CardContent>
      </Card>
    {/each}
  </div>
</section>

<style>
  :global(.feature-card-grid) {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        0deg,
        rgba(148, 163, 184, 0.2) 1px,
        transparent 0
      ),
      linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 0);
    background-size: 56px 56px;
    animation: feature-grid-pan 18s linear infinite;
    opacity: 0;
    pointer-events: none;
    z-index: 0;
    transition: opacity 0.2s ease;
    mask-image: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 1) 45%,
      rgba(0, 0, 0, 0) 90%
    );
  }

  :global(.feature-card:hover .feature-card-grid) {
    opacity: 0.6;
  }

  @keyframes feature-grid-pan {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-28px, -28px, 0);
    }
  }
</style>
