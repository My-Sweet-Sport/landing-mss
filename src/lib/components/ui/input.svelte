<script lang="ts">
  import { cn } from '$lib/utils';
  import type { InputHTMLAttributes } from 'svelte/elements';

  export let class: string | undefined = undefined;
  export let value: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let type: InputHTMLAttributes['type'] = 'text';
</script>

<input
  class={cn(
    'h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-foreground shadow-inner shadow-purple-500/10 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40',
    class
  )}
  {type}
  {value}
  {placeholder}
  {...$$restProps}
/>
