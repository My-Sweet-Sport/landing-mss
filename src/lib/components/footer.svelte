<script lang="ts">
  import { Separator } from "$lib/components/ui/separator";
  import { Dribbble, Github, Twitch, Twitter } from "lucide-svelte";

  import { base } from "$app/paths";

  const footerSections = [
    {
      title: "Product",
      links: [
        { title: "Overview", href: "#" },
        { title: "Features", href: "./#features" },
        { title: "Solutions", href: "#" },
        { title: "Tutorials", href: "#" },
        { title: "Pricing", href: "#" },
        { title: "Releases", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About us", href: "#" },

        { title: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Help centre", href: "#" },

        { title: "Support", href: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { title: "Twitter", href: "#" },
        { title: "LinkedIn", href: "#" },
        { title: "Facebook", href: "#" },
        { title: "GitHub", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        /* { title: "Terms", href: "#" }, */
        { title: "Privacy", href: "/privacy" },
        /* { title: "Cookies", href: "#" },
        { title: "Licenses", href: "#" },
        { title: "Settings", href: "#" }, */
        { title: "Contact", href: "#" },
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
        © 2023 MY SWEET SPORT. All Rights Reserved. All videos and shows on
        this platform are trademarks of, and all related images and content are
        the property of, My Sweet Sport Inc. Duplication and copy of this is
        strictly prohibited. All rights reserved.
      </p>
    </div>
    {#each footerSections as { title: sectionTitle, links }}
      <div class="xl:justify-self-end">
        <h6 class="font-semibold text-foreground">{sectionTitle}</h6>
        <ul class="mt-6 space-y-4">
          {#each links as { title: linkTitle, href }}
            <li>
              <a {href} class="text-muted-foreground hover:text-foreground"
                >{linkTitle}</a
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
