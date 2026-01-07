<script lang="ts">
  import Navbar from "$lib/components/navbar/navbar.svelte";
  import Footer from "$lib/components/footer.svelte";

  type SummaryPoint = {
    question: string;
    detail: string;
    learnMore?: string;
    href?: string;
  };

  const summaryPoints: SummaryPoint[] = [
    {
      question: "What personal information do we process?",
      detail:
        "When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.",
      learnMore: "Learn more about personal information you disclose to us.",
      href: "what-we-collect"
    },
    {
      question: "Do we process any sensitive personal information?",
      detail:
        'Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.',
      href: "what-we-collect"
    },
    {
      question: "Do we collect any information from third parties?",
      detail: "We do not collect any information from third parties.",
      href: "what-we-collect"
    },
    {
      question: "How do we process your information?",
      detail:
        "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.",
      learnMore: "Learn more about how we process your information.",
      href: "how-we-process"
    },
    {
      question: "In what situations and with which parties do we share personal information?",
      detail: "We may share information in specific situations and with specific third parties.",
      learnMore: "Learn more about when and with whom we share your personal information.",
      href: "sharing-information"
    },
    {
      question: "How do we keep your information safe?",
      detail:
        "We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee absolute security.",
      learnMore: "Learn more about how we keep your information safe.",
      href: "information-safety"
    },
    {
      question: "What are your rights?",
      detail:
        "Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.",
      learnMore: "Learn more about your privacy rights.",
      href: "privacy-rights"
    },
    {
      question: "How do you exercise your rights?",
      detail:
        "The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.",
      href: "privacy-rights"
    },
    {
      question: "Want to learn more about what we do with any information we collect?",
      detail: "Review the Privacy Notice in full."
    }
  ];

  const tableOfContents = [
    { id: "what-we-collect", label: "1. WHAT INFORMATION DO WE COLLECT?" },
    { id: "how-we-process", label: "2. HOW DO WE PROCESS YOUR INFORMATION?" },
    {
      id: "legal-bases",
      label: "3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?"
    },
    {
      id: "sharing-information",
      label: "4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
    },
    { id: "social-logins", label: "5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?" },
    { id: "information-retention", label: "6. HOW LONG DO WE KEEP YOUR INFORMATION?" },
    { id: "information-safety", label: "7. HOW DO WE KEEP YOUR INFORMATION SAFE?" },
    { id: "information-from-minors", label: "8. DO WE COLLECT INFORMATION FROM MINORS?" },
    { id: "privacy-rights", label: "9. WHAT ARE YOUR PRIVACY RIGHTS?" },
    { id: "dnt", label: "10. CONTROLS FOR DO-NOT-TRACK FEATURES" },
    { id: "notice-updates", label: "11. DO WE MAKE UPDATES TO THIS NOTICE?" },
    { id: "contact-us", label: "12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
    {
      id: "review-update-delete",
      label: "13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
    }
  ];
</script>

<svelte:head>
  <title>Privacy Policy | My Sweet Sport</title>
  <meta
    name="description"
    content="Learn how My Sweet Sport collects, uses, shares, and protects your personal information."
  />
</svelte:head>

<Navbar />

<main class="bg-background text-foreground">
  <section class="max-w-4xl mx-auto px-6 py-12 sm:py-20 space-y-10">
    <div class="space-y-4 text-center">
      <p class="text-sm font-semibold tracking-widest text-primary/80">
        PRIVACY POLICY
      </p>
      <h1 class="text-3xl sm:text-4xl font-semibold">Protecting Your Privacy</h1>
      <p class="text-muted-foreground text-base sm:text-lg">
        Last updated August 30, 2024
      </p>
      <p class="text-muted-foreground">
        This Privacy Notice for MySweetSport Inc. ("we," "us," or "our") describes how and why we might
        access, collect, store, use, and/or share ("process") your personal information when you use our
        Services, including when you:
      </p>
      <div class="text-muted-foreground/90 text-left space-y-2 text-sm sm:text-base">
        <p class="flex gap-2">
          <span aria-hidden="true">•</span>
          <span>
            Visit our website at app.mysweetsport.com, or any website of ours that links to this Privacy
            Notice
          </span>
        </p>
        <p class="flex gap-2">
          <span aria-hidden="true">•</span>
          <span>Engage with us in other related ways, including any sales, marketing, or events</span>
        </p>
      </div>
      <p class="text-muted-foreground">
        Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights
        and choices. We are responsible for making decisions about how your personal information is
        processed. If you do not agree with our policies and practices, please do not use our Services.
        If you still have any questions or concerns, please contact us at f.mondou@mysweetsport.com.
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      <div class="rounded-3xl border bg-card/30 p-6 shadow-lg shadow-black/5">
        <h2 class="text-xl font-semibold">Summary of Key Points</h2>
        <p class="text-muted-foreground mt-2">
          This overview highlights the essentials of our Privacy Notice. Use the table of contents to
          jump to any section for more detail.
        </p>
        <ul class="mt-4 space-y-4 text-sm text-muted-foreground">
          {#each summaryPoints as { question, detail, learnMore, href }}
            <li class="space-y-1">
              <p class="font-semibold text-foreground">{question}</p>
              <p>{detail}</p>
              {#if learnMore && href}
                <p>
                  <a class="text-primary hover:underline font-medium" href={`#${href}`}>
                    {learnMore}
                  </a>
                </p>
              {:else if learnMore}
                <p>{learnMore}</p>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
      <div class="rounded-3xl border bg-card/30 p-6 shadow-lg shadow-black/5">
        <h2 class="text-xl font-semibold">Table of Contents</h2>
        <ul class="mt-4 space-y-3 text-sm text-primary font-medium">
          {#each tableOfContents as { id, label }}
            <li>
              <a class="hover:underline" href={`#${id}`}>{label}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="space-y-12 text-sm sm:text-base leading-relaxed">
      <section id="what-we-collect" class="space-y-4">
        <h2 class="text-2xl font-semibold">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <p class="text-muted-foreground font-semibold">Personal information you disclose to us</p>
        <p class="text-muted-foreground font-semibold">In Short: We collect personal information that you provide to us.</p>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the
          Services, express an interest in obtaining information about us or our products and Services,
          when you participate in activities on the Services, or otherwise when you contact us.
        </p>
        <p>
          <span class="font-semibold">Personal Information Provided by You.</span>
          The personal information that we collect depends on the context of your interactions with us
          and the Services, the choices you make, and the products and features you use. The personal
          information we collect may include the following: names, email addresses, and usernames.
        </p>
        <p>
          <span class="font-semibold">Sensitive Information.</span>
          We do not process sensitive information.
        </p>
        <p>
          <span class="font-semibold">Social Media Login Data.</span>
          We may provide you with the option to register with us using your existing social media account
          details, like your Facebook, X, or other social media account. If you choose to register in
          this way, we will collect certain profile information about you from the social media provider,
          as described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
        </p>
        <p>We do not collect any information from third parties.</p>
        <p>
          All personal information that you provide to us must be true, complete, and accurate, and you
          must notify us of any changes to such personal information.
        </p>
        <p>
          <span class="font-semibold">Google API.</span>
          Our use of information received from Google APIs will adhere to Google API Services User Data
          Policy, including the Limited Use requirements.
        </p>
      </section>

      <section id="how-we-process" class="space-y-4">
        <h2 class="text-2xl font-semibold">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p class="text-muted-foreground font-semibold">
          In Short: We process your data to operate, improve, and secure the Services, or with your
          consent.
        </p>
        <p>
          We process your personal information to provide, improve, and administer our Services,
          communicate with you, for security and fraud prevention, and to comply with law. We may also
          process your information for other purposes with your consent. We process your personal
          information for a variety of reasons, depending on how you interact with our Services,
          including:
        </p>
        <ul class="list-disc pl-6 space-y-3">
          <li>
            <span class="font-semibold">To facilitate account creation and authentication and otherwise manage user accounts.</span>
            We may process your information so you can create and log in to your account, as well as keep
            your account in working order.
          </li>
          <li>
            <span class="font-semibold">To deliver and facilitate delivery of services to the user.</span>
            We may process your information to provide you with the requested service.
          </li>
        </ul>
      </section>

      <section id="legal-bases" class="space-y-4">
        <h2 class="text-2xl font-semibold">
          3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
        </h2>
        <p class="text-muted-foreground font-semibold">
          In Short: We only process your information when we have a valid legal reason to do so.
        </p>
        <p>
          We only process your personal information when we believe it is necessary and we have a valid
          legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to
          comply with laws, to provide you with services to enter into or fulfill our contractual
          obligations, to protect your rights, or to fulfill our legitimate business interests.
        </p>
        <p>
          We may process your information if you have given us specific permission (i.e., express
          consent) to use your personal information for a specific purpose, or in situations where your
          permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
          In some exceptional cases, we may be legally permitted under applicable law to process your
          information without your consent, including, for example:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
          <li>For investigations and fraud detection and prevention</li>
          <li>For business transactions provided certain conditions are met</li>
          <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
          <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
          <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
          <li>
            If it is reasonable to expect collection and use with consent would compromise the
            availability or the accuracy of the information and the collection is reasonable for
            purposes related to investigating a breach of an agreement or a contravention of the laws of
            Canada or a province
          </li>
          <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
          <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
          <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
          <li>If the information is publicly available and is specified by the regulations</li>
        </ul>
      </section>

      <section id="sharing-information" class="space-y-4">
        <h2 class="text-2xl font-semibold">
          4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </h2>
        <p class="text-muted-foreground font-semibold">
          In Short: We may share information in specific situations described in this section and/or with
          the following third parties.
        </p>
        <p>We may need to share your personal information in the following situations:</p>
        <p>
          <span class="font-semibold">Business Transfers.</span>
          We may share or transfer your information in connection with, or during negotiations of, any
          merger, sale of company assets, financing, or acquisition of all or a portion of our business
          to another company.
        </p>
      </section>

      <section id="social-logins" class="space-y-4">
        <h2 class="text-2xl font-semibold">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
        <p class="text-muted-foreground font-semibold">
          In Short: If you choose to register or log in via a social media account, we may receive
          profile details from that provider.
        </p>
        <p>
          Our Services let you sign in through providers such as Facebook or X. We receive the
          information that provider shares—commonly your name, email, profile picture, and public
          details—and use it only for purposes described in this notice. Please review the privacy
          policies of your social media providers for more on how they handle your data.
        </p>
        <p>
          Please note that we do not control, and are not responsible for, other uses of your personal
          information by your third-party social media provider. We recommend that you review their
          privacy notice to understand how they collect, use, and share your personal information, and
          how you can set your privacy preferences on their sites and apps.
        </p>
      </section>

      <section id="information-retention" class="space-y-4">
        <h2 class="text-2xl font-semibold">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p class="text-muted-foreground font-semibold">
          In Short: We keep information only as long as necessary to fulfill the purposes outlined here.
        </p>
        <p>
          We retain personal information for as long as you have an account or as needed to comply with
          legal, tax, or accounting requirements. When no legitimate need remains, we delete or anonymize
          the data, or securely store it until deletion is possible.
        </p>
      </section>

      <section id="information-safety" class="space-y-4">
        <h2 class="text-2xl font-semibold">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p class="text-muted-foreground font-semibold">
          In Short: We use organizational and technical security measures to safeguard your personal
          information.
        </p>
        <p>
          We implement appropriate security controls, but no electronic transmission or storage
          technology is 100 percent secure. Accessing or transmitting personal information to and from
          our Services is done at your own risk, and you should use a secure environment.
        </p>
      </section>

      <section id="information-from-minors" class="space-y-4">
        <h2 class="text-2xl font-semibold">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p class="text-muted-foreground font-semibold">
          In Short: We do not knowingly collect data from or market to children under 18 years of age.
        </p>
        <p>
          By using the Services you confirm that you are at least 18 or a parent or guardian of a minor
          using the Services with your consent. If we learn that information has been collected from
          someone under 18, we will deactivate the account and delete the data. Please contact us if you
          believe we may have collected data from a child.
        </p>
      </section>

      <section id="privacy-rights" class="space-y-4">
        <h2 class="text-2xl font-semibold">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p class="text-muted-foreground font-semibold">
          In Short: Depending on where you live, you may have rights to access, correct, delete, or limit
          the use of your personal information.
        </p>
        <p>
          In some regions (including Canada) you may request access to your data, ask for corrections or
          deletion, restrict processing, request data portability, or object to certain processing. You
          may also withdraw consent at any time by contacting us. Account holders can review or update
          information by logging into their settings, and can ask us to terminate their account. We may
          retain limited information to comply with laws, prevent fraud, or enforce agreements.
        </p>
      </section>

      <section id="dnt" class="space-y-4">
        <h2 class="text-2xl font-semibold">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>
          Most browsers and some mobile operating systems include a Do-Not-Track ("DNT") setting. No
          uniform standard for recognizing and implementing DNT signals currently exists, so we do not
          respond to them. If that changes, we will update this notice.
        </p>
      </section>

      <section id="notice-updates" class="space-y-4">
        <h2 class="text-2xl font-semibold">11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p>
          Yes. We update this Privacy Notice as necessary to remain compliant with applicable laws. The
          revised date at the top of the notice indicates when the latest changes were made.
        </p>
      </section>

      <section id="contact-us" class="space-y-4">
        <h2 class="text-2xl font-semibold">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>
          If you have questions or comments about this notice, contact our Data Protection Officer at
          f.mondou@mysweetsport.com or by mail at: MySweetSport Inc., Data Protection Officer, Frederic
          Mondou.
        </p>
      </section>

      <section id="review-update-delete" class="space-y-4">
        <h2 class="text-2xl font-semibold">
          13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
        </h2>
        <p>
          Depending on where you live, you may have the right to review, update, or delete the personal
          information we collect from you, and to withdraw your consent to our processing. To exercise
          these rights, submit a data subject access request or contact us at f.mondou@mysweetsport.com.
        </p>
      </section>
    </div>
  </section>
</main>

<Footer />
