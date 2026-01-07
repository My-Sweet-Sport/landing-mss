<script lang="ts">
  import { base } from "$app/paths";
  import { Badge } from "$lib/components/ui/badge";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { ArrowUpRight, CirclePlay } from "lucide-svelte";
</script>

<div
  class="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent"
>
  <div
    class="max-w-(--breakpoint-xl) w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0"
  >
    <div class="max-w-xl">
      <!-- <Badge class="rounded-full py-1 border-none">Just released v1.0.0</Badge> -->
      <h1
        class="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.2]! tracking-tight"
      >
        <span>Train</span>
        <span
          class="block w-full bg-linear-to-r from-[#18CF48] to-[#60efff] bg-clip-text py-2 leading-12 text-transparent lg:inline"
          >your brain</span
        > <span>around <br />your sport</span>
      </h1>
      <p class="mt-6 max-w-[60ch] xs:text-lg">
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

        <!-- TODO: When a user click on Watch Demo button, it should open a modal with the demo video -->
        <Dialog.Root>
          <Dialog.Trigger
            ><Button
              variant="outline"
              size="lg"
              class="w-full sm:w-auto text-base shadow-none"
            >
              <CirclePlay class="h-5! w-5!" /> Watch Demo
            </Button></Dialog.Trigger
          >
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
              <Dialog.Description>
                <video
                  src="https://qqvteqmiccdgbetvcggd.supabase.co/storage/v1/object/public/public/MSS-Demo-with-music.mp4"
                  controls
                  autoplay
                  class="w-full rounded-md"
                ></video>
              </Dialog.Description>
            </Dialog.Header>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </div>
    <div
      class="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square"
    >
      <img
        src={`${base}/hero.png`}
        alt=""
        class="absolute inset-0 size-full object-cover rounded-xl border-muted border"
      />
    </div>
  </div>
</div>
