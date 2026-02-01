<script lang="ts">
  import { t } from 'svelte-i18n';
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { cn } from "$lib/utils";
  import { CircleCheck } from "lucide-svelte";
  const plans = [
    {
      nameKey: "pricing.plans.free.name",
      priceKey: "pricing.plans.free.price",
      descriptionKey: "pricing.plans.free.description",
      featureKeys: [
        "pricing.plans.free.features.limitedAccess",
        "pricing.plans.free.features.sdQuality",
        "pricing.plans.free.features.watchAnywhere",
      ],
      buttonTextKey: "pricing.plans.free.buttonText",
      buttonLink: "https://app.mysweetsport.com/signup",
    },
    {
      nameKey: "pricing.plans.individual.name",
      priceKey: "pricing.plans.individual.price",
      isRecommended: true,
      descriptionKey: "pricing.plans.individual.description",
      featureKeys: [
        "pricing.plans.individual.features.fullAccess",
        "pricing.plans.individual.features.highQuality",
        "pricing.plans.individual.features.watchAnywhere",
      ],
      buttonTextKey: "pricing.plans.individual.buttonText",
      buttonLink: "https://app.mysweetsport.com/signup?plan=individual-monthly",
      isPopular: true,
    },
    {
      nameKey: "pricing.plans.teams.name",
      priceKey: "pricing.plans.teams.price",
      descriptionKey: "pricing.plans.teams.description",
      featureKeys: [
        "pricing.plans.teams.features.allIndividual",
        "pricing.plans.teams.features.teamAccess",
        "pricing.plans.teams.features.customPayment",
      ],
      buttonTextKey: "pricing.plans.teams.buttonText",
      buttonLink:
        "https://cal.com/mysweetsport/quick-45-minutes-demo?user=mysweetsport",
    },
  ];
</script>

<div id="pricing" class="max-w-(--breakpoint-lg) mx-auto py-12 xs:py-20 px-6">
  <h1 class="text-4xl xs:text-5xl font-bold text-center tracking-tight">
    {$t('pricing.title')}
  </h1>
  <div
    class="mt-8 xs:mt-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0"
  >
    {#each plans as plan (plan.nameKey)}
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
            {$t('pricing.mostPopular')}
          </Badge>
        {/if}
        <h3 class="text-lg font-medium">{$t(plan.nameKey)}</h3>
        <p class="mt-2 text-4xl font-bold">{$t(plan.priceKey)}</p>
        <p class="mt-4 font-medium text-muted-foreground">
          {$t(plan.descriptionKey)}
        </p>
        <Separator class="my-6" />
        <ul class="space-y-2">
          {#each plan.featureKeys as featureKey (featureKey)}
            <li class="flex items-start gap-2">
              <CircleCheck class="h-4 w-4 mt-1 text-green-600" />
              {$t(featureKey)}
            </li>
          {/each}
        </ul>
        <Button
          variant={plan.isPopular ? "default" : "outline"}
          size="lg"
          class="w-full mt-6 "
          href={plan.buttonLink}
        >
          {$t(plan.buttonTextKey)}
        </Button>
      </div>
    {/each}
  </div>
</div>
