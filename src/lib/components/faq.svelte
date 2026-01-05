<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import { Accordion as AccordionPrimitive } from "bits-ui";
  import { cn } from "$lib/utils";
  import { Plus } from "lucide-svelte";

  const faq = [
    {
      question: "What is MySweetSport?",
      answer:
        "My Sweet Sport is a web platform that provides decision-making solutions for sports enthusiasts, coaches, and athletes, through a catalog of high-quality videos.",
    },
    {
      question: "How can I subscribe as a team?",
      answer:
        "Contact us today to discuss subscription options that are customized for your team and take advantage of the benefits of our complete catalog of high-quality videos.",
    },
    {
      question: "How expensive is MySweetSport?",
      answer:
        "Just click on the Pricing link at the top of the page to have more information on our plans.",
    },
    {
      question: "How easy is cancelling the subscription?",
      answer: "Just go to the account page and click on Cancel Membership.",
    },
  ];
</script>

<div id="faq" class="w-full max-w-(--breakpoint-xl) mx-auto py-8 xs:py-16 px-6">
  <h2
    class="md:text-center text-3xl xs:text-4xl md:text-5xl leading-[1.15]! font-bold tracking-tighter"
  >
    Frequently Asked Questions
  </h2>
  <p class="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
    Quick answers to common questions about our products and services.
  </p>

  <div class="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
    <Accordion.Root
      type="single"
      collapsible
      class="mt-8 space-y-4 md:columns-2 gap-4"
    >
      {#each faq as { question, answer }, index}
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
              <span>{question}</span>
              <Plus
                class="h-5 w-5 shrink-0 transition-transform duration-200 "
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <Accordion.Content class="text-[15px]">
            {answer}
          </Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</div>
