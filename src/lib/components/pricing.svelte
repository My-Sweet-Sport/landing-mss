<script lang="ts">
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { cn } from "$lib/utils";
  import { CircleCheck } from "lucide-svelte";
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Try it, no strings attached.",
      features: [
        "Limited access to the platform",
        "SD quality videos",
        "Watch anywhere you want",
      ],
      buttonText: "Create a free account",
      buttonLink: "https://app.mysweetsport.com/signup",
    },
    {
      name: "Individual",
      price: "$9.99/month",
      isRecommended: true,
      description: "Perfect for a single subscriber.",
      features: [
        "Full access to the platform",
        "High-quality videos",
        "Watch anywhere you want",
      ],
      buttonText: "Get started",
      buttonLink: "https://app.mysweetsport.com/signup?plan=individual-monthly",
      isPopular: true,
    },
    {
      name: "Teams",
      price: "Custom",
      description: "Perfect for teams.",
      features: [
        "All features in Individual",
        "Access for the whole team",
        "Customized payment options",
      ],
      buttonText: "Talk to sales",
      buttonLink:
        "https://cal.com/mysweetsport/quick-45-minutes-demo?user=mysweetsport",
    },
  ];
</script>

<div id="pricing" class="max-w-(--breakpoint-lg) mx-auto py-12 xs:py-20 px-6">
  <h1 class="text-4xl xs:text-5xl font-bold text-center tracking-tight">
    Pricing
  </h1>
  <div
    class="mt-8 xs:mt-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0"
  >
    {#each plans as plan (plan.name)}
      <div
        class={cn(
          "relative bg-accent/50 border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
          {
            "bg-background border-[2px] border-primary py-12 rounded-xl!":
              plan.isPopular,
          }
        )}
      >
        {#if plan.isPopular}
          <Badge
            class="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2"
          >
            Most Popular
          </Badge>
        {/if}
        <h3 class="text-lg font-medium">{plan.name}</h3>
        <p class="mt-2 text-4xl font-bold">{plan.price}</p>
        <p class="mt-4 font-medium text-muted-foreground">
          {plan.description}
        </p>
        <Separator class="my-6" />
        <ul class="space-y-2">
          {#each plan.features as feature (feature)}
            <li class="flex items-start gap-2">
              <CircleCheck class="h-4 w-4 mt-1 text-green-600" />
              {feature}
            </li>
          {/each}
        </ul>
        <Button
          variant={plan.isPopular ? "default" : "outline"}
          size="lg"
          class="w-full mt-6 "
          href={plan.buttonLink}
        >
          {plan.buttonText}
        </Button>
      </div>
    {/each}
  </div>
</div>
