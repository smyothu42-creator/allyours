/**
 * ─────────────────────────────────────────────────────────────
 *  ALL THE WORDS AND NUMBERS ON THE SITE LIVE IN THIS ONE FILE.
 * ─────────────────────────────────────────────────────────────
 *
 *  You can edit anything between the 'quote marks' and the site
 *  will update. You do not need to touch any other file.
 *
 *  Anything marked  // TODO  is placeholder text or a made-up
 *  number that I invented so the page would look finished.
 *  Replace those with allyours' real words and real figures
 *  before this goes live.
 */

export const nav = {
  brand: 'allyours',
  links: [
    {
      label: 'Programs',
      href: '/programs',
      // These become the drop-down under "Programs" — your menu / sub-menu idea.
      children: [
        { label: 'Peekaboo', href: '/programs#peekaboo', note: 'The program' },
        { label: 'Literature Arts', href: '/programs#literature-arts', note: 'Specialization' },
        { label: 'Design Studies', href: '/programs#design-studies', note: 'Specialization' },
      ],
    },
    { label: 'Podcast', href: '/podcast' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Partner', href: '/partner' },
  ],
  donate: { label: 'Donate', href: '/donate' },
  apply: { label: 'Apply', href: '/programs#apply' },
}

export const hero = {
  eyebrow: 'A youth arts organisation in Myanmar',
  // The three lines of the big headline. Keep them short.
  headline: ['We make room', 'for young', 'Myanmar voices.'],
  // The word rendered in serif italic inside the headline, for emphasis.
  emphasis: 'Myanmar',
  body:
    'allyours runs free creative programs for young people in Myanmar — a place to write, ' +
    'to design, to be read and to be seen. One program, two specializations, and a growing ' +
    'community of alumni doing the work.', // TODO — replace with allyours' own description
  primary: { label: 'Apply to Peekaboo', href: '/programs#apply' },
  secondary: { label: 'Support the work', href: '/donate' },
  // Small facts under the hero. TODO — real numbers.
  facts: [
    { value: '4', label: 'cohorts run' },
    { value: '120+', label: 'young creatives' },
    { value: '2', label: 'specializations' },
    { value: '100%', label: 'free to join' },
  ],
}

export const marquee = [
  'write it down',
  'make it anyway',
  'peekaboo by allyours',
  'literature arts',
  'design studies',
  'all of it is yours',
]

/**
 * The program structure your site map described:
 *   One program → Peekaboo → branches into two specializations.
 * Peekaboo is deliberately the largest, loudest card.
 */
export const programs = {
  kicker: 'Programs',
  title: 'One program. Two ways in.',
  intro:
    'Everything allyours teaches runs through Peekaboo. Once you are in, you choose the ' +
    'specialization that fits the work you want to make.',
  peekaboo: {
    id: 'peekaboo',
    name: 'Peekaboo',
    tag: 'The program',
    accent: 'brand' as const,
    description:
      'A cohort-based creative program for young people in Myanmar. Workshops, mentorship, ' +
      'a showcase at the end, and a cohort that stays with you afterwards.', // TODO
    meta: [
      { k: 'Format', v: 'Cohort, part-time' }, // TODO
      { k: 'Length', v: '12 weeks' }, // TODO
      { k: 'Cost', v: 'Free' }, // TODO
      { k: 'Language', v: 'Burmese & English' }, // TODO
    ],
    links: [
      { label: 'Events & showcase', href: '/programs#events' },
      { label: 'Cohort gallery', href: '/programs#gallery' },
      { label: 'Projects', href: '/projects' },
    ],
    cta: { label: 'Apply to Peekaboo', href: '/programs#apply' },
  },
  specializations: [
    {
      id: 'literature-arts',
      name: 'Literature Arts',
      accent: 'magenta' as const,
      description:
        'For writers. Poetry, essays, short fiction and translation — taken seriously, ' +
        'edited properly, and published at the end of the cohort.', // TODO
      links: [
        { label: 'Events & showcase', href: '/programs#events' },
        { label: 'Cohort gallery', href: '/programs#gallery' },
        { label: 'Projects', href: '/projects' },
      ],
      cta: { label: 'Apply', href: '/programs#apply' },
    },
    {
      id: 'design-studies',
      name: 'Design Studies',
      accent: 'mint' as const,
      description:
        'For makers of visual work. Type, image, layout and craft — with real briefs, ' +
        'real critique, and a portfolio you can actually show.', // TODO
      links: [
        { label: 'Events & showcase', href: '/programs#events' },
        { label: 'Cohort gallery', href: '/programs#gallery' },
        { label: 'Projects', href: '/projects' },
      ],
      cta: { label: 'Apply', href: '/programs#apply' },
    },
  ],
}

/**
 * The podcast is deliberately its own section, away from the programs —
 * because "Peekaboo by allyours" is the podcast's full name, and the
 * Facebook page is mainly podcast video, not events or programs.
 */
export const podcast = {
  kicker: 'Podcast',
  fullName: 'Peekaboo by allyours',
  title: 'Conversations, in full.',
  body:
    'Long-form conversations with people making things in Myanmar — writers, designers, ' +
    'organisers, and the occasional argument. New episodes on Facebook and YouTube.', // TODO
  primary: { label: 'Watch on Facebook', href: 'https://facebook.com/' }, // TODO — real page URL
  secondary: { label: 'All episodes', href: '/podcast' },
  episodes: [
    { no: '012', title: 'What we owe the reader', guest: 'Guest name', length: '48 min' }, // TODO
    { no: '011', title: 'Designing in a blackout', guest: 'Guest name', length: '52 min' }, // TODO
    { no: '010', title: 'The first draft is allowed to be bad', guest: 'Guest name', length: '41 min' }, // TODO
  ],
}

export const behind = {
  kicker: 'Behind allyours',
  title: 'Why we do it this way.',
  blocks: [
    {
      k: 'Mission',
      v: 'To give young people in Myanmar a serious, free place to make creative work and be taken seriously for it.', // TODO
    },
    {
      k: 'Vision',
      v: 'A generation of Myanmar writers and designers who never had to ask permission to start.', // TODO
    },
    {
      k: 'Story',
      v: 'allyours started as a small reading group and became a program because the people in it kept showing up.', // TODO
    },
    {
      k: 'Culture',
      v: 'Everything is free, feedback is honest, and the work belongs to the person who made it. That is where the name comes from.', // TODO
    },
  ],
  cta: { label: 'Be a part of allyours', href: '/about#join' },
}

/**
 * The donation section. Its whole job is Goal 2 — fund the work.
 * Numbers are the argument, so the numbers come first.
 */
export const impact = {
  kicker: 'Impact snapshot',
  title: 'What your money actually does.',
  // The big ghost word repeated behind this section's heading. One word only.
  backdropWord: 'support',
  stats: [
    { value: '120+', label: 'young creatives trained', sub: 'across 4 cohorts' }, // TODO
    { value: '38', label: 'projects published', sub: 'writing and design' }, // TODO
    { value: '14', label: 'public events', sub: 'showcases and readings' }, // TODO
    { value: '0 MMK', label: 'paid by participants', sub: 'every program is free' }, // TODO
  ],
  // "One donation buys one specific thing" converts far better than a bare amount.
  tiers: [
    { amount: '25,000 MMK', buys: 'Printing for one cohort showcase zine' }, // TODO
    { amount: '75,000 MMK', buys: 'One writer’s full 12 weeks of materials' }, // TODO
    { amount: '250,000 MMK', buys: 'A guest mentor session for the whole cohort' }, // TODO
  ],
  body:
    'allyours is free for everyone who joins, which means it is paid for by people who ' +
    'believe it should exist. Every cohort we publish what came in and what it went to.',
  primary: { label: 'Donate now', href: '/donate' },
  secondary: { label: 'Read our reports', href: '/about#transparency' },
}

export const alumni = {
  kicker: 'Alumni showcase',
  title: 'The work speaks first.',
  body: 'A few things made inside Peekaboo cohorts.',
  // TODO — swap these for real alumni, real work, real cohort numbers.
  works: [
    { title: 'Monsoon, Interrupted', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 04', accent: 'magenta' as const },
    { title: 'Type Specimen: Yangon', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 04', accent: 'mint' as const },
    { title: 'Letters I Did Not Send', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 03', accent: 'magenta' as const },
    { title: 'A Poster a Day', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 03', accent: 'mint' as const },
    { title: 'Grandmother Tongue', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 02', accent: 'magenta' as const },
    { title: 'Field Notes, Bound', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 02', accent: 'mint' as const },
  ],
  cta: { label: 'See all projects', href: '/projects' },
}

export const partner = {
  kicker: 'Partner with allyours',
  title: 'Put your name behind the next cohort.',
  body:
    'We work with organisations who want to reach young Myanmar creatives honestly — not as ' +
    'an audience, but as people making things worth backing.', // TODO
  benefits: [
    { k: 'Reach', v: 'Your name in front of every cohort, showcase and podcast episode for the season.' }, // TODO
    { k: 'Access', v: 'First look at graduating portfolios when you are hiring or commissioning.' }, // TODO
    { k: 'Transparency', v: 'A written progress and budget report at the end of every cohort you fund.' }, // TODO
    { k: 'Presence', v: 'A speaking or mentoring slot inside the program, if you want one.' }, // TODO
  ],
  // TODO — replace with real partner names.
  current: ['Partner One', 'Partner Two', 'Partner Three', 'Partner Four', 'Partner Five'],
  reports: [
    { label: 'Progress report — Cohort 04', href: '/partner#reports' }, // TODO
    { label: 'Budget report — 2025', href: '/partner#reports' }, // TODO
  ],
  cta: { label: 'Start a conversation', href: '/partner#contact' },
}

/**
 * Goal 3 is awareness, and the only thing on a website that actually
 * measures awareness is a subscriber count. So the newsletter gets
 * its own full-width moment rather than a footer afterthought.
 */
export const newsletter = {
  kicker: 'Stay close',
  title: 'One email per cohort. Nothing else.',
  body: 'Open applications, showcase invites, and what the last cohort made.',
  placeholder: 'you@email.com',
  button: 'Subscribe',
  note: 'No spam. Unsubscribe any time.',
}

/**
 * ─────────────────────────────────────────────────────────────
 *  THE INNER PAGES — Podcast, Projects, About, Partner.
 *  Same rule as everything above: edit between the quote marks,
 *  anything marked TODO is invented placeholder.
 * ─────────────────────────────────────────────────────────────
 */

export const podcastPage = {
  kicker: 'Podcast',
  title: 'Conversations, kept whole.',
  // the word(s) drawn in the marker script inside the title
  emphasis: 'kept whole.',
  body:
    'Peekaboo by allyours is long-form talk with the people making things in Myanmar — ' +
    'writers, designers, organisers. No clips-first editing: the whole conversation, ' +
    'the way it happened.', // TODO
  listen: [
    { label: 'Facebook', href: 'https://facebook.com/' }, // TODO — real page URL
    { label: 'YouTube', href: 'https://youtube.com/' }, // TODO
    { label: 'Spotify', href: 'https://spotify.com/' }, // TODO
  ],
  latest: {
    tag: 'Latest episode',
    no: '012',
    title: 'What we owe the reader',
    guest: 'Guest name', // TODO
    guestRole: 'Writer · Cohort 02', // TODO
    length: '48 min',
    blurb:
      'On editing your friends honestly, what a first reader owes a first draft, and why ' +
      'publishing in Burmese still matters.', // TODO
    cta: { label: 'Play the episode', href: 'https://facebook.com/' }, // TODO — episode URL
  },
  // The full archive. Newest first.
  archive: [
    { no: '012', title: 'What we owe the reader', guest: 'Guest name', length: '48 min' }, // TODO
    { no: '011', title: 'Designing in a blackout', guest: 'Guest name', length: '52 min' }, // TODO
    { no: '010', title: 'The first draft is allowed to be bad', guest: 'Guest name', length: '41 min' }, // TODO
    { no: '009', title: 'Who gets to call themselves a designer', guest: 'Guest name', length: '55 min' }, // TODO
    { no: '008', title: 'Writing between two languages', guest: 'Guest name', length: '46 min' }, // TODO
    { no: '007', title: 'Keeping a practice alive on no money', guest: 'Guest name', length: '50 min' }, // TODO
  ],
  guestsTitle: 'Some of the voices so far.',
  guests: [
    { name: 'Guest name', role: 'Writer' }, // TODO — real guests
    { name: 'Guest name', role: 'Designer' },
    { name: 'Guest name', role: 'Organiser' },
    { name: 'Guest name', role: 'Poet' },
    { name: 'Guest name', role: 'Illustrator' },
    { name: 'Guest name', role: 'Editor' },
  ],
  suggest: {
    title: 'Know a voice we should hear?',
    body: 'Tell us who — a name and one line on why. We read every suggestion.', // TODO
    cta: { label: 'Suggest a guest', href: 'mailto:hello@allyours.org?subject=Guest%20suggestion' }, // TODO — real email
  },
}

export const projectsPage = {
  kicker: 'Projects',
  title: 'Everything the cohorts have made.',
  emphasis: 'made.',
  body:
    'The full archive of work made inside Peekaboo — writing from Literature Arts, visual ' +
    'work from Design Studies. Filter it down to what you came for.', // TODO
  // TODO — swap every entry for real work, real names, real cohorts.
  works: [
    { title: 'Monsoon, Interrupted', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 04', blurb: 'A cycle of poems about weather you can no longer plan around.' },
    { title: 'Type Specimen: Yangon', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 04', blurb: 'Letterforms collected from shop signs before they disappear.' },
    { title: 'Letters I Did Not Send', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 03', blurb: 'Essays addressed to people who will never read them.' },
    { title: 'A Poster a Day', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 03', blurb: 'Thirty days, thirty posters, one rule: finish by midnight.' },
    { title: 'Grandmother Tongue', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 02', blurb: 'Recipes, proverbs and a language that skips a generation.' },
    { title: 'Field Notes, Bound', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 02', blurb: 'A hand-bound book of drawings made on the commute.' },
    { title: 'The Quiet Hours', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 02', blurb: 'Short fiction set entirely between midnight and dawn.' },
    { title: 'Signs of Life', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 01', blurb: 'A photographic index of hand-painted street typography.' },
    { title: 'Translations of Home', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 01', blurb: 'Poems carried across from Burmese and back again.' },
  ],
  submit: {
    title: 'Made something in a cohort?',
    body: 'Alumni can add their work to the archive — send the piece and one line about it.', // TODO
    cta: { label: 'Submit your work', href: 'mailto:hello@allyours.org?subject=Project%20submission' }, // TODO — real email
  },
}

export const aboutPage = {
  kicker: 'Behind allyours',
  title: 'The people, and why any of this exists.',
  emphasis: 'The people,',
  body:
    'allyours is a youth arts organisation in Myanmar. This page is the honest version of ' +
    'who we are: what we are trying to do, how it started, and how you can be part of it.', // TODO
  mission: {
    k: 'Mission',
    v: 'To give young people in Myanmar a serious, free place to make creative work and be taken seriously for it.', // TODO
  },
  vision: {
    k: 'Vision',
    v: 'A generation of Myanmar writers and designers who never had to ask permission to start.', // TODO
  },
  storyTitle: 'How it started.',
  // The story as a timeline. TODO — real years and real events.
  story: [
    { year: '2021', text: 'A reading group of friends sharing work over tea, with no plan beyond next week.' },
    { year: '2022', text: 'The group keeps showing up. First workshops, first name: allyours.' },
    { year: '2023', text: 'Peekaboo runs as a real cohort for the first time. The podcast starts as a side table.' },
    { year: '2024', text: 'Literature Arts and Design Studies become their own tracks with their own mentors.' },
    { year: 'Now', text: 'Four cohorts in, still free, still run by the people who were once in it.' },
  ],
  cultureTitle: 'How we work with each other.',
  culture: [
    { k: 'Free means free', v: 'No fees, no hidden costs, no unpaid “exposure”. If we cannot fund it, we do not run it.' }, // TODO
    { k: 'Honest feedback', v: 'Work is critiqued properly and kindly. Being taken seriously is the whole point.' }, // TODO
    { k: 'The work is yours', v: 'Everything made in a cohort belongs to the person who made it. Hence the name.' }, // TODO
  ],
  teamTitle: 'The team.',
  // TODO — real people, real roles, real photos (drop images in /public).
  team: [
    { name: 'Team member', role: 'Founder & program lead' },
    { name: 'Team member', role: 'Literature Arts mentor' },
    { name: 'Team member', role: 'Design Studies mentor' },
    { name: 'Team member', role: 'Podcast producer' },
    { name: 'Team member', role: 'Community & events' },
    { name: 'Team member', role: 'Operations' },
  ],
  video: {
    title: 'Say hello properly.',
    note: 'A short intro video is coming here — the team, the room, the work.', // TODO — replace with the real embed
  },
  transparencyTitle: 'Transparency.',
  transparencyBody:
    'Every cohort we publish what came in and what it went to. The reports are the same ones ' +
    'partners get — nothing is edited down for the public version.', // TODO
  reports: [
    { label: 'Progress report — Cohort 04', href: '/partner#reports' }, // TODO — real files
    { label: 'Budget report — 2025', href: '/partner#reports' }, // TODO
  ],
  join: {
    title: 'Be a part of allyours.',
    ways: [
      { k: 'Join a cohort', v: 'Apply to Peekaboo and pick your specialization once you are in.', cta: { label: 'Apply', href: '/programs#apply' } },
      { k: 'Mentor', v: 'Give a cohort an evening a week of honest, useful feedback.', cta: { label: 'Write to us', href: 'mailto:hello@allyours.org?subject=Mentoring' } }, // TODO email
      { k: 'Volunteer', v: 'Events, editing, subtitles, logistics — the unglamorous work that makes it run.', cta: { label: 'Write to us', href: 'mailto:hello@allyours.org?subject=Volunteering' } }, // TODO email
    ],
  },
}

export const partnerPage = {
  kicker: 'Partner',
  title: 'Put your name where the work is.',
  emphasis: 'the work',
  // the offer in one sentence
  body:
    'A partnership funds one thing: free, serious creative education for young people in ' +
    'Myanmar — and you see exactly what your money did, every cohort.', // TODO
  cta: { label: 'Start a conversation', href: '#contact' },
  benefitsTitle: 'What a partner gets.',
  statsTitle: 'The numbers for your deck.',
  statsBody:
    'Use these directly in an internal proposal — they are the same figures we publish in ' +
    'the cohort reports.', // TODO
  partnersTitle: 'Already involved.',
  reportsTitle: 'How we report back.',
  reportsBody:
    'One progress report and one budget report per cohort you fund. Written to be read, ' +
    'not filed.', // TODO
  contact: {
    title: 'Start the conversation.',
    body:
      'Tell us who you are and what you have in mind — sponsorship, mentoring, venue, ' +
      'in-kind. We reply within a week.', // TODO
    nameLabel: 'Your name',
    orgLabel: 'Organisation',
    emailLabel: 'Email',
    messageLabel: 'What do you have in mind?',
    button: 'Send it',
    // Until a form backend is connected, the button opens an email instead.
    email: 'hello@allyours.org', // TODO — real email
    note: 'Prefer email? Write to hello@allyours.org directly.', // TODO
  },
}

export const footer = {
  blurb: 'allyours is a youth arts organisation in Myanmar. Every program is free.',
  columns: [
    {
      title: 'Programs',
      links: [
        { label: 'Peekaboo', href: '/programs#peekaboo' },
        { label: 'Literature Arts', href: '/programs#literature-arts' },
        { label: 'Design Studies', href: '/programs#design-studies' },
        { label: 'Apply', href: '/programs#apply' },
      ],
    },
    {
      title: 'Organisation',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Podcast', href: '/podcast' },
        { label: 'Transparency', href: '/about#transparency' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Donate', href: '/donate' },
        { label: 'Partner', href: '/partner' },
        { label: 'Partner benefits', href: '/partner#benefits' },
        { label: 'Reports', href: '/partner#reports' },
      ],
    },
    {
      title: 'Elsewhere',
      links: [
        { label: 'Facebook', href: 'https://facebook.com/' }, // TODO
        { label: 'Instagram', href: 'https://instagram.com/' }, // TODO
        { label: 'YouTube', href: 'https://youtube.com/' }, // TODO
        { label: 'Email us', href: 'mailto:hello@allyours.org' }, // TODO
      ],
    },
  ],
  legal: '© 2026 allyours. Yangon, Myanmar.', // TODO
}
