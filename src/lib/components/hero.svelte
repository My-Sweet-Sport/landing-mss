<script lang="ts">
  import { base } from "$app/paths";
  import { Badge } from "$lib/components/ui/badge";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { cn } from "$lib/utils";
  import { ArrowUpRight, CirclePlay } from "lucide-svelte";

  const hoverScale = 1.05;
  const rotateStrength = 30;
  const translateStrength = 30;

  let imageTransform = "scale(1)";

  const handlePointerMove = (event: PointerEvent) => {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const percentX = (event.clientX - rect.left) / rect.width - 0.5;
    const percentY = (event.clientY - rect.top) / rect.height - 0.5;

    const translateX = percentX * translateStrength;
    const translateY = percentY * translateStrength;
    const rotateX = -percentY * rotateStrength;
    const rotateY = percentX * rotateStrength;

    imageTransform = `perspective(1200px) translate3d(${translateX}px, ${translateY}px, 35px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${hoverScale})`;
  };

  const resetImageTransform = () => {
    imageTransform = "scale(1)";
  };
</script>

<div
  class="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent"
>
  <div
    class="max-w-(--breakpoint-xl) w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0"
  >
    <div class="max-w-xl text-center lg:text-left">
      <!-- <Badge class="rounded-full py-1 border-none">Just released v1.0.0</Badge> -->
      <h1
        class="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.2]! tracking-tight"
      >
        <span>Train</span>
        <span
          class="hero-gradient block w-full bg-clip-text py-2 leading-12 text-transparent lg:inline"
          >your brain</span
        > <span>around <br />your sport</span>
      </h1>
      <p class="mt-6 max-w-[60ch] xs:text-lg mx-auto lg:mx-0">
        Start making better decisions, without leaving your couch.
      </p>
      <!-- <h1
        class="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.2]! tracking-tight"
      >
        Train your brain around your sport
      </h1>

      <p class="mt-6 max-w-[60ch] xs:text-lg">
        Start making better decisions, without leaving your couch.
      </p> -->
      <div class="mt-12 flex flex-col sm:flex-row items-center gap-4">
        <Button size="lg" class="w-full sm:w-auto text-base" href="#pricing">
          Get Started <ArrowUpRight class="h-5! w-5!" />
        </Button>

        <Dialog.Root>
          <Dialog.Trigger
            class={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto text-base shadow-none"
            )}
          >
            <CirclePlay class="h-5! w-5!" /> Watch Demo
          </Dialog.Trigger>
          <Dialog.Content class="sm:max-w-3xl">
            <Dialog.Header>
              <Dialog.Title>Watch the MSS demo</Dialog.Title>
              <Dialog.Description>
                See how the MSS neuro-training experience works in under 1
                minute.
              </Dialog.Description>
            </Dialog.Header>
            <div
              class="mt-4 aspect-video w-full overflow-hidden rounded-lg border border-muted"
            >
              <video
                src="https://qqvteqmiccdgbetvcggd.supabase.co/storage/v1/object/public/public/MSS-Demo-with-music.mp4"
                controls
                playsinline
                autoplay
                muted
                loop
                class="size-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </div>
    <div
      class="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square"
      on:pointerenter={handlePointerMove}
      on:pointermove={handlePointerMove}
      on:pointerleave={resetImageTransform}
    >
      <img
        src={`${base}/hero.png`}
        alt=""
        class="absolute inset-0 size-full object-cover rounded-xl border-muted border transition-transform duration-300 ease-out will-change-transform"
        style={`transform: ${imageTransform}`}
      />
    </div>
  </div>
</div>

<style>
  .hero-gradient {
    background-image: linear-gradient(90deg, #18cf48, #60efff, #18cf48);
    background-size: 200% 200%;
    animation: hero-gradient-shift 6s ease infinite;
  }

  @keyframes hero-gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
