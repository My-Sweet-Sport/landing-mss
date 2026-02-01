<script lang="ts">
  import { base } from "$app/paths";
  import { t } from 'svelte-i18n';

  const footerSections = [
    {
      titleKey: "footer.sections.product.title",
      links: [
        { titleKey: "footer.sections.product.overview", href: `${base}/` },
        { titleKey: "footer.sections.product.features", href: `${base}/#features` },
        { titleKey: "footer.sections.product.pricing", href: `${base}/#pricing` },
        { titleKey: "footer.sections.product.releases", href: "https://app.mysweetsport.com/changelog" },
      ],
    },
    {
      titleKey: "footer.sections.company.title",
      links: [
        { titleKey: "footer.sections.company.about", href: "#" },
        { titleKey: "footer.sections.company.contact", href: "#" },
      ],
    },
    {
      titleKey: "footer.sections.resources.title",
      links: [
        { titleKey: "footer.sections.resources.helpCentre", href: "#" },

        { titleKey: "footer.sections.resources.support", href: "#" },
      ],
    },
    {
      titleKey: "footer.sections.social.title",
      links: [
        { titleKey: "footer.sections.social.twitter", href: "#" },
        { titleKey: "footer.sections.social.linkedin", href: "#" },
        { titleKey: "footer.sections.social.facebook", href: "#" },
        { titleKey: "footer.sections.social.github", href: "#" },
      ],
    },
    {
      titleKey: "footer.sections.legal.title",
      links: [
        /* { titleKey: "Terms", href: "#" }, */

        { titleKey: "footer.sections.legal.privacy", href: `${base}/privacy` },
        /* { titleKey: "Cookies", href: "#" },
        { titleKey: "Licenses", href: "#" },
        { titleKey: "Settings", href: "#" }, */
        { titleKey: "footer.sections.legal.contact", href: "#" },
      ],
    },
  ] as const;

  const currentYear = new Date().getFullYear();
</script>

<footer class="mt-12 xs:mt-20 dark bg-background border-t">
  <div
    class="max-w-(--breakpoint-xl) mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6"
  >
    <div class="col-span-full xl:col-span-2">
      <img
        width="124"
        height="32"
        src={`${base}/logo.png`}
        alt="My Sweet Sport"
      />

      <p class="mt-4 text-muted-foreground text-sm">
        {$t('footer.copyright')}
      </p>
    </div>
    {#each footerSections as { titleKey: sectionTitleKey, links }}
      <div class="xl:justify-self-end">
        <h6 class="font-semibold text-foreground">{$t(sectionTitleKey)}</h6>
        <ul class="mt-6 space-y-4">
          {#each links as { titleKey: linkTitleKey, href }}
            <li>
              <a {href} class="text-muted-foreground hover:text-foreground"
                >{$t(linkTitleKey)}</a
              >
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  <!-- <Separator />
  <div
    class="max-w-(--breakpoint-xl) mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6"
  >
    <span class="text-muted-foreground text-center xs:text-start">
      &copy; {currentYear}
      <a
        href="https://shadcnui-blocks.com"
        target="_blank"
        class="underline ml-1"
        rel="noreferrer"
      >
        Shadcn UI Blocks
      </a>
      . All rights reserved.
    </span>
    <div class="flex items-center gap-5 text-muted-foreground">
      <a href="#" target="_blank" aria-label="Twitter" rel="noreferrer">
        <Twitter class="h-5 w-5" />
      </a>
      <a href="#" target="_blank" aria-label="Dribbble" rel="noreferrer">
        <Dribbble class="h-5 w-5" />
      </a>
      <a href="#" target="_blank" aria-label="Twitch" rel="noreferrer">
        <Twitch class="h-5 w-5" />
      </a>
      <a href="#" target="_blank" aria-label="GitHub" rel="noreferrer">
        <Github class="h-5 w-5" />
      </a>
    </div>
  </div>
 -->
</footer>
