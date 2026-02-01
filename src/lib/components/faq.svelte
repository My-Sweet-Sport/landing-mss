<script lang="ts">
  import { t } from 'svelte-i18n';
  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import { Accordion as AccordionPrimitive } from "bits-ui";
  import { cn } from "$lib/utils";
  import { Plus } from "lucide-svelte";

  const faq = [
    {
      questionKey: "faq.questions.whatIs.question",
      answerKey: "faq.questions.whatIs.answer",
    },
    {
      questionKey: "faq.questions.teamSubscription.question",
      answerKey: "faq.questions.teamSubscription.answer",
    },
    {
      questionKey: "faq.questions.pricing.question",
      answerKey: "faq.questions.pricing.answer",
    },
    {
      questionKey: "faq.questions.cancellation.question",
      answerKey: "faq.questions.cancellation.answer",
    },
  ];
</script>

<div id="faq" class="w-full max-w-(--breakpoint-xl) mx-auto py-8 xs:py-16 px-6">
  <h2
    class="md:text-center text-3xl xs:text-4xl md:text-5xl leading-[1.15]! font-bold tracking-tighter"
  >
    {$t('faq.title')}
  </h2>
  <p class="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
    {$t('faq.subtitle')}
  </p>

  <div class="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
    <Accordion.Root
      type="single"
      collapsible
      class="mt-8 space-y-4 md:columns-2 gap-4"
    >
      {#each faq as { questionKey, answerKey }, index}
        <Accordion.Item
          value={`question-${index}`}
          class="bg-accent py-1 px-4 rounded-xl border-none mt-0! mb-4! break-inside-avoid"
        >
          <AccordionPrimitive.Header class="flex">
            <AccordionPrimitive.Trigger
              class={cn(
                "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                "text-start text-lg"
              )}
            >
              <span>{$t(questionKey)}</span>
              <Plus
                class="h-5 w-5 shrink-0 transition-transform duration-200 "
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <Accordion.Content class="text-[15px]">
            {$t(answerKey)}
          </Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</div>
