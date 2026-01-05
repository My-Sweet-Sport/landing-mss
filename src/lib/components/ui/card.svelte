<script lang="ts">
  import { cn } from '$lib/utils';
  export let class: string | undefined = undefined;
</script>

<div class={cn('rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur', class)}>
  <slot />
</div>
