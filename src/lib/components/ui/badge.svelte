<script lang="ts">
  import { cn } from '$lib/utils';
  export let class: string | undefined = undefined;
</script>

<span
  class={cn(
    'inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-100',
    class
  )}
>
  <slot />
</span>
