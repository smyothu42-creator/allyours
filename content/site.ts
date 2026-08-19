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
    { label: 'Programs', href: '/programs' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'Projects', href: '/projects' },
    { label: 'Mentors', href: '/mentors' },
    { label: 'About', href: '/about' },
    { label: 'Partner', href: '/partner' },
  ],
  apply: { label: 'Apply Now', href: '/programs#apply' },
}

export const hero = {
  // The three lines of the big headline. Keep them short.
  headline: ['We empower', 'creative people', 'in Burma.'],
  // The word rendered in the stamp tag inside the headline, for emphasis.
  emphasis: 'creative',
  body:
    'allyours is a non-profit working across art, design and education in Burma — ' +
    'empowering creative people with co-working spaces, professional coaching sessions ' +
    'and networking events.',
  primary: { label: 'Apply to Peekaboo', href: '/programs#apply' },
  secondary: { label: 'Support the work', href: '/donate' },
  // Small facts under the hero. TODO — real numbers.
  facts: [
    { value: '4', label: 'cohorts & pilots run' },
    { value: '120+', label: 'young creatives' }, // TODO — real number
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
  title: 'The Peekaboo programs.',
  intro:
    'Everything allyours runs is a Peekaboo program — art, literature and design. ' +
    'The cohorts and pilots we have run so far, and the two programs running now.',
  // The home-page rail: every Peekaboo program so far, oldest to current.
  // Each card follows the big Peekaboo card design. TODO — real descriptions,
  // real meta lines.
  cards: [
    {
      name: 'Cohort 1',
      tag: 'Previous',
      description:
        'The first full cohort after the pilots — workshops, mentoring and a public showcase.', // TODO
      meta: [
        { k: 'Status', v: 'Completed' },
        { k: 'Tracks', v: 'Literature & Design' }, // TODO
      ],
      cta: { label: 'See the work', href: '/projects' },
    },
    {
      name: 'Cohort 2',
      tag: 'Previous',
      description:
        'The second cohort, across both specializations.', // TODO
      meta: [
        { k: 'Status', v: 'Completed' },
        { k: 'Tracks', v: 'Literature & Design' }, // TODO
      ],
      cta: { label: 'See the work', href: '/projects' },
    },
    {
      name: 'Cohort 3',
      tag: 'Previous',
      description:
        'The most recent full cohort — workshops, mentoring and a public showcase.', // TODO
      meta: [
        { k: 'Status', v: 'Completed' },
        { k: 'Tracks', v: 'Literature & Design' }, // TODO
      ],
      cta: { label: 'See the work', href: '/projects' },
    },
    {
      name: 'Pilot 2',
      tag: 'Previous',
      description:
        'The pilot run that shaped how Peekaboo works today.', // TODO
      meta: [
        { k: 'Status', v: 'Completed' },
        { k: 'Format', v: 'Pilot' },
      ],
      cta: { label: 'See the work', href: '/projects' },
    },
    {
      name: 'Literature Arts Program',
      tag: 'Current',
      description:
        'For writers. Poetry, essays, short fiction and translation — taken seriously, ' +
        'edited properly, and published at the end of the cohort.', // TODO
      meta: [
        { k: 'Status', v: 'Running now' },
        { k: 'Cost', v: 'Free' },
      ],
      cta: { label: 'Apply', href: '/programs#apply' },
    },
    {
      name: 'Design Studies Program',
      tag: 'Current',
      description:
        'For makers of visual work. Type, image, layout and craft — with real briefs, ' +
        'real critique, and a portfolio you can actually show.', // TODO
      meta: [
        { k: 'Status', v: 'Running now' },
        { k: 'Cost', v: 'Free' },
      ],
      cta: { label: 'Apply', href: '/programs#apply' },
    },
  ],
  peekaboo: {
    id: 'peekaboo',
    name: 'Peekaboo',
    tag: 'The program',
    accent: 'brand' as const,
    description:
      'A cohort-based creative program for young people in Burma. Workshops, coaching, ' +
      'a showcase at the end, and a cohort that stays with you afterwards.',
    meta: [
      { k: 'Format', v: 'Cohort, part-time' }, // TODO
      { k: 'Length', v: '12 weeks' }, // TODO
      { k: 'Cost', v: 'Free' }, // TODO
      { k: 'Language', v: 'Burmese & English' }, // TODO
    ],
    links: [
      { label: 'Events & showcase', href: '/programs#events' },
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
    'Long-form conversations with people making things in Burma — writers, designers, ' +
    'organisers, and the occasional argument. Listen on YouTube, Spotify and Facebook.', // TODO
  primary: { label: 'Listen on YouTube', href: 'https://youtube.com/' }, // TODO — real channel URL
  secondary: { label: 'All episodes', href: '/podcast' },
  // Any episode can also carry  image: '/episodes/012.jpg'  — drop the
  // picture into the /public/episodes folder and the hover card shows it
  // instead of the coloured placeholder tile.
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
      v: 'To empower creative people in Burma — with co-working spaces, professional coaching and a community that takes the work seriously.',
    },
    {
      k: 'Vision',
      v: 'A generation of Burmese artists, designers and educators who never had to ask permission to start.',
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
    { value: '120+', label: 'young creatives trained', sub: 'across cohorts & pilots' }, // TODO
    { value: '38', label: 'projects published', sub: 'writing and design' }, // TODO
    { value: '14', label: 'public events', sub: 'showcases and readings' }, // TODO
    { value: '0 MMK', label: 'paid by participants', sub: 'every program is free' }, // TODO
  ],
  body:
    'allyours is free for everyone who joins, which means it is paid for by people who ' +
    'believe it should exist. Every cohort we publish what came in and what it went to.',
  primary: { label: 'Contact to Donate', href: '/donate' },
  secondary: { label: 'Read our reports', href: '/about#transparency' },
}

export const alumni = {
  kicker: 'Alumni showcase',
  title: 'The work speaks first.',
  body: 'A few things made inside Peekaboo cohorts.',
  // TODO — swap these for real alumni, real work, real cohort numbers.
  works: [
    { title: 'Monsoon, Interrupted', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 3', accent: 'magenta' as const },
    { title: 'Type Specimen: Yangon', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 3', accent: 'mint' as const },
    { title: 'Letters I Did Not Send', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 2', accent: 'magenta' as const },
    { title: 'A Poster a Day', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 2', accent: 'mint' as const },
    { title: 'Grandmother Tongue', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 1', accent: 'magenta' as const },
    { title: 'Field Notes, Bound', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 1', accent: 'mint' as const },
  ],
  cta: { label: 'See all projects', href: '/projects' },
}

export const partner = {
  kicker: 'Partner with allyours',
  title: 'Put your name behind the next cohort.',
  body:
    'We work with organisations who want to reach creative people in Burma honestly — not as ' +
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
    { label: 'Progress report — Cohort 3', href: '/partner#reports' }, // TODO
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

/**
 * The full /programs page. The Peekaboo card at the top reuses
 * `programs.peekaboo` above (description, meta, apply link), so those
 * only ever need editing once.
 */
export const programsPage = {
  kicker: 'Programs',
  title: 'Every program here is Peekaboo.',
  emphasis: 'Peekaboo.',
  body:
    'Art, literature and design, run as cohorts — with mentoring, peer reviews, coworking, ' +
    'visits and a public showcase at the end. You apply once, and the program carries you ' +
    'from first draft to finished work.',
  // The status line under the hero. Keep it honest: open, closed, or a date.
  status: 'Applications for the next cohort open soon.', // TODO — real date
  whoFor: [
    'Creative people in Burma who make things — or want to start.',
    'No portfolio, no degree, no fee. The application is the work.',
    'Burmese or English, whichever you write and think in.',
  ],
  // The core of Peekaboo — the five things every cohort is built on.
  stepsTitle: 'The core of Peekaboo.',
  steps: [
    { k: 'Mentoring', v: 'A working writer or designer reads, critiques and pushes your work further.' }, // TODO — real description
    { k: 'Visits', v: 'Studio and field visits — seeing where and how the work actually gets made.' }, // TODO — real description
    { k: 'Peer reviews', v: 'Your cohort reads your work properly and tells you the truth about it.' }, // TODO — real description
    { k: 'Coworking', v: 'Shared making time — showing up, sitting down and doing the work together.' }, // TODO — real description
    { k: 'Showcase', v: 'The cohort ends in public — a reading, an exhibition, a zine.' }, // TODO — real description
  ],
  // Events & showcase (#events). Current programs first, then the past cohorts.
  // Any event can carry  image: '/events/cohort-3.jpg'  — drop the photo into
  // /public/events and the hover card shows it instead of the coloured tile.
  eventsTitle: 'Events & showcase.',
  eventsBody:
    'Peekaboo Events brings the cohort’s work into public — showcases, readings and ' +
    'open sessions.', // TODO — finish this sentence with the real copy
  events: [
    {
      date: 'Now',
      kind: 'Current',
      title: 'Peekaboo Literature Arts Program',
      description: 'The writing specialization, running now — poetry, essays, fiction and translation.', // TODO
      href: '#apply',
    },
    {
      date: 'Now',
      kind: 'Current',
      title: 'Peekaboo Design Studies Program',
      description: 'The design specialization, running now — type, image, layout and craft.', // TODO
      href: '#apply',
    },
    {
      date: 'Past',
      kind: 'Previous',
      title: 'Cohort 3',
      description: 'The most recent full cohort — workshops, mentoring and a public showcase.', // TODO
      href: '/projects',
    },
    {
      date: 'Past',
      kind: 'Previous',
      title: 'Cohort 2',
      description: 'The second cohort, across both specializations.', // TODO
      href: '/projects',
    },
    {
      date: 'Past',
      kind: 'Previous',
      title: 'Cohort 1',
      description: 'The first full cohort after the pilots.', // TODO
      href: '/projects',
    },
    {
      date: 'Past',
      kind: 'Previous',
      title: 'Pilot 2',
      description: 'The pilot run that shaped how Peekaboo works today.', // TODO
      href: '/projects',
    },
  ] as { date: string; kind: 'Current' | 'Previous'; title: string; description: string; href: string; image?: string }[],
  // The application (#apply). No form backend yet, so the form opens the
  // visitor's email app with their answers filled in — same as the partner page.
  apply: {
    title: 'Apply to Peekaboo.',
    emphasis: 'Peekaboo.',
    body:
      'A short form, one piece of work, and honesty over polish. We read everything ' +
      'and reply to everyone.', // TODO
    nameLabel: 'Your name',
    emailLabel: 'Email',
    trackLabel: 'Which way in?',
    trackOptions: ['Literature Arts', 'Design Studies', 'Not sure yet'],
    workLabel: 'Tell us about something you made',
    workHint: 'A link, a paragraph, a description — finished or not.',
    button: 'Send application',
    email: 'hello@allyours.org', // TODO — real email
    note: 'Prefer email? Write to hello@allyours.org with "Peekaboo application" as the subject.', // TODO
  },
  faqTitle: 'Asked every cohort.',
  faq: [
    { q: 'How much does it cost?', a: 'Nothing. Every allyours program is free — materials included. That is the point.' },
    { q: 'What language does it run in?', a: 'Burmese and English, mixed. Write and work in whichever you think in.' }, // TODO
    { q: 'How much time does it take?', a: 'One evening session a week with your cohort, plus your own making time. Showcase weeks are busier.' }, // TODO
    { q: 'Who can apply?', a: 'Young creative people in Burma. No degree, no portfolio, no experience required — the application asks for one honest piece of work, finished or not.' }, // TODO
    { q: 'Do I need equipment?', a: 'No. If a brief needs materials, we provide them. A phone is enough to start.' }, // TODO
    { q: 'How are people chosen?', a: 'We read every application. We pick for honesty and appetite, not polish — a rough thing you actually made beats a perfect thing you copied.' }, // TODO
  ],
}

export const podcastPage = {
  kicker: 'Podcast',
  title: 'Conversations, kept whole.',
  // the word(s) drawn in the marker script inside the title
  emphasis: 'kept whole.',
  body:
    'Peekaboo by allyours is long-form talk with the people making things in Burma — ' +
    'writers, designers, organisers. No clips-first editing: the whole conversation, ' +
    'the way it happened.', // TODO
  listen: [
    { label: 'YouTube', href: 'https://youtube.com/' }, // TODO — real channel URL
    { label: 'Spotify', href: 'https://spotify.com/' }, // TODO
    { label: 'Facebook', href: 'https://facebook.com/' }, // TODO — real page URL
  ],
  latest: {
    tag: 'Latest episode',
    no: '012',
    title: 'What we owe the reader',
    guest: 'Guest name', // TODO
    guestRole: 'Writer · Cohort 1', // TODO
    length: '48 min',
    blurb:
      'On editing your friends honestly, what a first reader owes a first draft, and why ' +
      'publishing in Burmese still matters.', // TODO
    cta: { label: 'Play the episode', href: 'https://facebook.com/' }, // TODO — episode URL
  },
  // The full archive. Newest first. Same trick as the home list: add
  // image: '/episodes/012.jpg' to any entry for a real hover thumbnail.
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
    { title: 'Monsoon, Interrupted', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 3', blurb: 'A cycle of poems about weather you can no longer plan around.' },
    { title: 'Type Specimen: Yangon', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 3', blurb: 'Letterforms collected from shop signs before they disappear.' },
    { title: 'Letters I Did Not Send', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 2', blurb: 'Essays addressed to people who will never read them.' },
    { title: 'A Poster a Day', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 2', blurb: 'Thirty days, thirty posters, one rule: finish by midnight.' },
    { title: 'Grandmother Tongue', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 1', blurb: 'Recipes, proverbs and a language that skips a generation.' },
    { title: 'Field Notes, Bound', author: 'Alumni name', kind: 'Design Studies', cohort: 'Cohort 1', blurb: 'A hand-bound book of drawings made on the commute.' },
    { title: 'The Quiet Hours', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Cohort 1', blurb: 'Short fiction set entirely between midnight and dawn.' },
    { title: 'Signs of Life', author: 'Alumni name', kind: 'Design Studies', cohort: 'Pilot 2', blurb: 'A photographic index of hand-painted street typography.' },
    { title: 'Translations of Home', author: 'Alumni name', kind: 'Literature Arts', cohort: 'Pilot 2', blurb: 'Poems carried across from Burmese and back again.' },
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
  emphasis: 'exists.',
  body:
    'allyours is a non-profit working across art, design and education in Burma. This page ' +
    'is the honest version of who we are: what we are trying to do, how it started, and how ' +
    'you can be part of it.',
  mission: {
    k: 'Mission',
    v: 'To empower creative people in Burma — with co-working spaces, professional coaching and a community that takes the work seriously.',
  },
  vision: {
    k: 'Vision',
    v: 'A generation of Burmese artists, designers and educators who never had to ask permission to start.',
  },
  storyTitle: 'How it started.',
  // The story as a timeline. TODO — real years and real events.
  story: [
    { year: '2021', text: 'A reading group of friends sharing work over tea, with no plan beyond next week.' },
    { year: '2022', text: 'The group keeps showing up. First workshops, first name: allyours.' },
    { year: '2023', text: 'Peekaboo runs as a real cohort for the first time. The podcast starts as a side table.' },
    { year: '2024', text: 'Literature Arts and Design Studies become their own tracks with their own mentors.' },
    { year: 'Now', text: 'Two pilots and three cohorts in, still free, still run by the people who were once in it.' },
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
    { label: 'Progress report — Cohort 3', href: '/partner#reports' }, // TODO — real files
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

export const mentorsPage = {
  kicker: 'Mentors',
  title: 'The people giving their evenings.',
  emphasis: 'their evenings.',
  body:
    'Every cohort runs on working writers and designers who show up once a week to read, ' +
    'critique and push the work further. These are the people who have done it so far.', // TODO
  // TODO — replace every mentor with a real person. Each one can carry
  //   photo: '/mentors/name.jpg'
  // (drop the picture into /public/mentors) and the arch shows the photo
  // instead of the initial.
  mentors: [
    {
      name: 'Mentor name',
      discipline: 'Literature Arts',
      about:
        'A working writer and editor. Ran the poetry crits for two cohorts and edited the showcase zines line by line.', // TODO
      cohorts: ['Cohort 2', 'Cohort 3'],
      projects: ['Monsoon, Interrupted', 'Letters I Did Not Send'],
    },
    {
      name: 'Mentor name',
      discipline: 'Design Studies',
      about:
        'A graphic designer with a studio practice. Set the real briefs and hosted the final portfolio reviews.', // TODO
      cohorts: ['Cohort 3'],
      projects: ['Type Specimen: Yangon'],
    },
    {
      name: 'Mentor name',
      discipline: 'Design Studies',
      about:
        'An illustrator and zine-maker. Taught the bookbinding weekends and everything about finishing on time.', // TODO
      cohorts: ['Cohort 1', 'Cohort 2'],
      projects: ['A Poster a Day', 'Field Notes, Bound'],
    },
    {
      name: 'Mentor name',
      discipline: 'Literature Arts',
      about:
        'A translator working between Burmese and English. Led the translation workshops and the reading nights.', // TODO
      cohorts: ['Pilot 2', 'Cohort 1'],
      projects: ['Grandmother Tongue', 'Translations of Home'],
    },
  ],
  // the door for new mentors, same address as the About page uses
  join: {
    title: 'Give a cohort your evenings.',
    body:
      'One evening a week, honest feedback, a showcase at the end. If you have a working ' +
      'practice and patience to share it, we want to hear from you.', // TODO
    cta: { label: 'Write to us', href: 'mailto:hello@allyours.org?subject=Mentoring' }, // TODO — real email
  },
}

export const partnerPage = {
  kicker: 'Partner',
  title: 'Put your name where the work is.',
  emphasis: 'the work is.',
  // the offer in one sentence
  body:
    'A partnership funds one thing: free, serious creative education for young people in ' +
    'Burma — and you see exactly what your money did, every cohort.', // TODO
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
  blurb:
    'allyours is a non-profit working across art, design and education in Burma — ' +
    'co-working spaces, professional coaching and networking events, all free.',
  columns: [
    {
      title: 'Programs',
      links: [
        { label: 'Peekaboo', href: '/programs#peekaboo' },
        { label: 'Literature Arts', href: '/programs#events' },
        { label: 'Design Studies', href: '/programs#events' },
        { label: 'Apply', href: '/programs#apply' },
      ],
    },
    {
      title: 'Organisation',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Mentors', href: '/mentors' },
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
        { label: 'YouTube', href: 'https://youtube.com/' }, // TODO
        { label: 'Spotify', href: 'https://spotify.com/' }, // TODO
        { label: 'Facebook', href: 'https://facebook.com/' }, // TODO
        { label: 'Instagram', href: 'https://instagram.com/' }, // TODO
        { label: 'Email us', href: 'mailto:hello@allyours.org' }, // TODO
      ],
    },
  ],
  legal: '© 2026 allyours. Yangon, Burma.', // TODO
}
