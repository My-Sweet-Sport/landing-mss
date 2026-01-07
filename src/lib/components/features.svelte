<script lang="ts">
  import { base } from "$app/paths";
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
    title: string;
    description: string;
    screenshotUrl?: string;
  };
  const features: Feature[] = [
    {
      icon: Goal,
      title: "Improve Decisions",
      screenshotUrl: `${base}/questionnaire.jpeg`,
      description:
        "Digest community performance signals, AI scouting tips, and merch demand data to pick the next best move with confidence.",
    },
    {
      icon: BookCheck,
      title: "New Videos Everyday",
      screenshotUrl: `${base}/videos.png`,
      description:
        "Feed your academy with daily AI-edited drills, film rooms, and highlight reels pulled straight from MySweetSport activity.",
    },
    {
      icon: ChartPie,
      title: "Performance Tracking",
      screenshotUrl: `${base}/personalDashboard.png`,
      description:
        "Visualize streaks, session quality, and shop conversions in one pulse so you never miss a surge or slowdown.",
    },
    {
      icon: Users,
      title: "Training For The Whole Team",
      screenshotUrl: `${base}/dashboard.png`,
      description:
        "Generate personalized tracks for coaches, captains, and superfans so every role gets the exact reps they need.",
    },
    {
      icon: FolderSync,
      title: "Custom Videos",
      screenshotUrl: `${base}/customVideos.png`,
      description:
        "Transform any upload or live session into branded, platform-ready clips with automated lower thirds and CTAs.",
    },
    {
      icon: Zap,
      title: "Quick 5-min Sessions",
      screenshotUrl: `${base}/5min.jpeg`,
      description:
        "Spin up bite-sized workouts in minutes, optimized for the MySweetSport mobile flow.",
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
    Boost Your Strategy with Smart Features
  </h2>
  <div
    class="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
  >
    {#each features as feature (feature.title)}
      <Card class="flex flex-col border rounded-xl overflow-hidden shadow-none">
        <CardHeader>
          <svelte:component this={feature.icon} />
          <h4 class="mt-3 text-xl font-bold tracking-tight">
            {feature.title}
          </h4>
          <p class="mt-1 text-muted-foreground text-sm xs:text-[17px]">
            {feature.description}
          </p>
        </CardHeader>
        <CardContent class="mt-auto px-0 pb-0">
          {#if feature.screenshotUrl}
            <img
              src={feature.screenshotUrl}
              alt={feature.title}
              class="bg-muted h-52 ml-6 rounded-tl-xl aspect-video"
            />
          {/if}
        </CardContent>
      </Card>
    {/each}
  </div>
</section>
