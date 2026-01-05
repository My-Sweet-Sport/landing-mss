<script lang="ts">
  import { cn } from '$lib/utils';
  import { type VariantProps, cva } from 'class-variance-authority';
  import type { ButtonHTMLAttributes } from 'svelte/elements';

  const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 disabled:pointer-events-none disabled:opacity-60',
    {
      variants: {
        variant: {
          default: 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30 hover:from-purple-400 hover:to-indigo-400',
          outline: 'border border-purple-500/40 text-foreground hover:bg-purple-500/10',
          ghost: 'text-foreground hover:bg-white/5'
        },
        size: {
          default: 'h-11 px-5',
          sm: 'h-9 px-3',
          lg: 'h-12 px-6 text-base'
        }
      },
      defaultVariants: {
        variant: 'default',
        size: 'default'
      }
    }
  );

  type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

  export let class: string | undefined = undefined;
  export let variant: ButtonProps['variant'] = 'default';
  export let size: ButtonProps['size'] = 'default';
  export let type: ButtonProps['type'] = 'button';
</script>

<button
  class={cn(buttonVariants({ variant, size }), class)}
  type={type}
  {...$$restProps}
>
  <slot />
</button>
