<script lang="ts">
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import { cn } from "$lib/utils.js";
  import MenuIcon from "lucide-svelte/icons/menu";
  import XIcon from "lucide-svelte/icons/x";
  import Logo from "./logo.svelte";
  import NavMenu from "./nav-menu.svelte";

  let open = false;

  const setOpen = (value: boolean) => {
    open = value;
  };

  const close = () => setOpen(false);

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && open) {
      close();
    }
  };
</script>

<svelte:window on:keydown={handleKeydown} />

<button
  type="button"
  class={buttonVariants({ variant: "outline", size: "icon" })}
  aria-label="Open navigation menu"
  aria-expanded={open}
  on:click={() => setOpen(true)}
>
  <MenuIcon class="size-4" />
  <span class="sr-only">Open navigation menu</span>
</button>

{#if open}
  <div
    class="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
    role="presentation"
    on:click={close}
  ></div>

  <aside
    class="fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l border-accent bg-background p-6 shadow-xl"
    aria-label="Navigation drawer"
  >
    <div class="flex items-center justify-between">
      <Logo class="h-8 w-auto" />
      <button
        type="button"
        class={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "text-muted-foreground"
        )}
        aria-label="Close navigation menu"
        on:click={close}
      >
        <XIcon class="size-4" />
        <span class="sr-only">Close navigation menu</span>
      </button>
    </div>

    <NavMenu orientation="vertical" class="mt-12" />

    <div class="mt-8 space-y-4">
      <Button
        variant="outline"
        class="w-full sm:hidden"
        href="https://app.mysweetsport.com/login">Sign In</Button
      >
      <Button class="w-full xs:hidden" href="#pricing">Get Started</Button>
    </div>
  </aside>
{/if}
