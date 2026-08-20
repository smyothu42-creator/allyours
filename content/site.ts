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
    'allyours is a non-profit working across art, design and education in Burma, ' +
    'empowering creative people with co-working spaces, professional coaching sessions ' +
    'and networking events.',
  primary: { label: 'Apply to Peekaboo', href: '/programs#apply' },
  secondary: { label: 'Support the work', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=inquiry@allurs.cc' },
  // Small facts under the hero. TODO, real numbers.
  facts: [
    { value: '5', label: 'cohorts & pilots run' },
    { value: '42+', label: 'young creatives' },
    { value: '7', label: 'specializations' },
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
    'Everything allyours runs is a Peekaboo program, art, literature and design. ' +
    'The cohorts and pilots we have run so far, and the two programs running now.',
  // The home-page rail: the two current programs first, then every
  // Peekaboo cohort and pilot so far. Each card follows the big Peekaboo
  // card design. TODO, real descriptions, real meta lines.
  cards: [
    {
      name: 'Literature Arts Program',
      tag: 'Current',
      description:
        'For writers. Poetry, essays, short fiction and translation, taken seriously, ' +
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
        'For makers of visual work. Type, image, layout and craft, with real briefs, ' +
        'real critique, and a portfolio you can actually show.', // TODO
      meta: [
        { k: 'Status', v: 'Running now' },
        { k: 'Cost', v: 'Free' },
      ],
      cta: { label: 'Apply', href: '/programs#apply' },
    },
    {
      name: 'Cohort 1',
      tag: 'Previous',
      description:
        'The first full cohort after the pilots, workshops, mentoring and a public showcase.', // TODO
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
        'The most recent full cohort, workshops, mentoring and a public showcase.', // TODO
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
        'For writers. Poetry, essays, short fiction and translation, taken seriously, ' +
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
        'For makers of visual work. Type, image, layout and craft, with real briefs, ' +
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
    'Long-form conversations with people making things in Burma, writers, designers, ' +
    'organisers, and the occasional argument. Listen on YouTube, Spotify and Facebook.', // TODO
  primary: { label: 'Listen on YouTube', href: 'https://youtube.com/@peekaboobyallyours?si=5katOPupq8jobREj' },
  secondary: { label: 'All episodes', href: '/podcast' },
  // Any episode can also carry  image: '/episodes/012.jpg' , drop the
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
      v: 'To empower creative people in Burma, with co-working spaces, professional coaching and a community that takes the work seriously.',
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
  cta: { label: 'Be a part of allyours', href: 'https://allyours.fillout.com/t/x1SrEBquRXus' },
}

/**
 * The donation section. Its whole job is Goal 2, fund the work.
 * Numbers are the argument, so the numbers come first.
 */
export const impact = {
  kicker: 'Impact snapshot',
  title: 'What your money actually does.',
  // The big ghost word repeated behind this section's heading. One word only.
  backdropWord: 'support',
  stats: [
    { value: '42+', label: 'young creatives trained', sub: 'across cohorts & pilots' },
    { value: '38', label: 'projects published', sub: 'writing and design' }, // TODO
    { value: '7', label: 'public events', sub: 'showcases and readings' },
    { value: '0 MMK', label: 'paid by participants', sub: 'every program is free' }, // TODO
  ],
  body:
    'allyours is free for everyone who joins, which means it is paid for by people who ' +
    'believe it should exist. Every cohort we publish what came in and what it went to.',
  primary: { label: 'Contact to Donate', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=inquiry@allurs.cc' },
  secondary: { label: 'Read our reports', href: '/about#transparency' },
}

export const alumni = {
  kicker: 'Alumni showcase',
  title: 'The work speaks first.',
  body: 'A few things made inside Peekaboo cohorts.',
  // TODO, swap these for real alumni, real work, real cohort numbers.
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
    'We work with organisations who want to reach creative people in Burma honestly, not as ' +
    'an audience, but as people making things worth backing.', // TODO
  benefits: [
    { k: 'Reach', v: 'Your name in front of every cohort, showcase and podcast episode for the season.' }, // TODO
    { k: 'Access', v: 'First look at graduating portfolios when you are hiring or commissioning.' }, // TODO
    { k: 'Transparency', v: 'A written progress and budget report at the end of every cohort you fund.' }, // TODO
    { k: 'Presence', v: 'A speaking or mentoring slot inside the program, if you want one.' }, // TODO
  ],
  // Real partner logos live in /public/partners. Grouped the way the
  // year-end report presents them: still-active vs past support.
  current: {
    ongoing: [
      { name: 'Zulip', note: 'Internal communication platform', logo: '/partners/zulip.png' },
      { name: 'Slite', note: 'Information management software support', logo: '/partners/slite.png' },
      { name: 'Competency Business Solutions', note: 'Legal support', logo: '/partners/competency.png' },
      { name: 'KST Law Firm', note: 'Legal support', logo: '/partners/kst-law.png' },
      { name: 'Slido', note: 'Live Q&A and polling', logo: '/partners/slido.png' },
      { name: 'Sampan Travel', note: 'Walking tours and supper clubs with our team', logo: '/partners/sampan-travel.png' },
      { name: 'Bhar Sar Pyan', note: 'Website translation', logo: '/partners/bhar-sar-pyan.png' },
      { name: 'YiKA', note: 'Cost-recovery support for allyours and Peekaboo kimonos', logo: '/partners/yika.png' },
      { name: 'RICE Communications', note: 'Communications support', logo: '/partners/rice-communications.png' },
    ],
    been: [
      { name: 'Superlist', note: 'Internal tasks management with lifetime support', logo: '/partners/superlist.png' },
      { name: 'Basecamp', note: 'Project management', logo: '/partners/basecamp.png' },
      { name: 'Tangenc', note: 'Design tooling', logo: '/partners/tangenc.png' },
      { name: 'Million Mindscape', note: '3 months mentorship for team', logo: '/partners/million-mindscape.png' },
      { name: 'Studio Tekku + Walking Brands Agency', note: 'Brand identity', logo: '/partners/studio-tekku.png' },
      { name: 'Code Mal Solutions', note: 'Built our first website allyours.ngo and provided tech support', logo: '/partners/code-mal.png' },
      { name: 'GIFT-Ed', note: 'HR support at initial stage of the organization', logo: '/partners/gift-ed.png' },
    ],
  },
  reports: [
    { label: '2026 mid-year report & 2025 year end report', href: 'https://drive.google.com/drive/folders/10Ah1lZb5CEuen3-A6V4ez80IrlzHtSrm?usp=sharing' },
    { label: 'Progress report: Cohort 3', href: 'https://drive.google.com/drive/folders/10Ah1lZb5CEuen3-A6V4ez80IrlzHtSrm?usp=sharing' },
  ],
  cta: { label: 'Start a conversation', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=inquiry@allurs.cc' },
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
 *  THE INNER PAGES, Podcast, Projects, About, Partner.
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
    'Art, literature and design, run as cohorts, with mentoring, peer reviews, coworking, ' +
    'visits and a public showcase at the end. You apply once, and the program carries you ' +
    'from first draft to finished work.',
  // The status line under the hero. Keep it honest: open, closed, or a date.
  status: 'Applications for the next cohort open soon.', // TODO, real date
  whoFor: [
    'Creative people in Burma who make things, or want to start.',
    'No portfolio, no degree, no fee. The application is the work.',
    'Burmese or English, whichever you write and think in.',
  ],
  // The core of Peekaboo, the five things every cohort is built on.
  stepsTitle: 'The core of Peekaboo.',
  steps: [
    { k: 'Mentoring', v: 'A working writer or designer reads, critiques and pushes your work further.' }, // TODO, real description
    { k: 'Visits', v: 'Studio and field visits, seeing where and how the work actually gets made.' }, // TODO, real description
    { k: 'Peer reviews', v: 'Your cohort reads your work properly and tells you the truth about it.' }, // TODO, real description
    { k: 'Coworking', v: 'Shared making time, showing up, sitting down and doing the work together.' }, // TODO, real description
    { k: 'Showcase', v: 'The cohort ends in public, a reading, an exhibition, a zine.' }, // TODO, real description
  ],
  // Events & showcase (#events). Current programs first, then the past cohorts.
  // Any event can carry  image: '/events/cohort-3.jpg' , drop the photo into
  // /public/events and the hover card shows it instead of the coloured tile.
  eventsTitle: 'Events & showcase.',
  eventsBody:
    'Peekaboo Events brings the cohort’s work into public, showcases, readings and ' +
    'open sessions.', // TODO, finish this sentence with the real copy
  events: [
    {
      date: 'Now',
      kind: 'Current',
      title: 'Peekaboo Literature Arts Program',
      description: 'A three-month online journey for 9 writers searching their voice in Burmese.',
      details:
        'Supported with Talks, Mentoring, Peer Reading and Co-working, the Literature Arts Program ' +
        'is a three-month online journey focused on the culturally connecting nature of writing in ' +
        'Burmese, for 9 writers who searched their voice and creative flow.',
      href: '#apply',
      image: '/events/literature-arts.jpg',
    },
    {
      date: 'Now',
      kind: 'Current',
      title: 'Peekaboo Design Studies Program',
      description: 'An intensive space for 7 emerging designers to refine their visual voice.',
      details:
        'Supported with Talks, Mentorship, Design Jams and Critiques, the Design Studies Program ' +
        'provided a high-energy, intensive space for 7 emerging designers to refine their visual ' +
        'voice and relearn the native cultural practices.',
      href: '#apply',
      image: '/events/design-studies.jpg',
    },
    {
      date: 'Past',
      kind: 'Previous',
      title: 'Cohort 3',
      description:
        'A redesigned 2-month cohort, 6 project leaders, cultural and artistic projects.',
      details:
        'Redesigned and upgraded, the 2-month PEEKABOO Program Cohort 3 fulfilled the wishes of ' +
        '6 project leaders to create projects that convey cultural, philosophical and artistic ' +
        'messages. With SMST (Site Visits, Mentoring, Showcase, Talks), allyours was able to ' +
        'support meaningful connections, diverse works, and a great step towards the future.',
      href: '/projects',
      image: '/events/cohort-3.jpg',
    },
    {
      date: 'Past',
      kind: 'Previous',
      title: 'Cohort 2',
      description: 'The second cohort, 6 creatives from different fields, fostered with SMST.',
      details:
        'Fostering 6 creatives from different fields with SMST (Site Visits, Mentoring, Showcase, ' +
        'Talks), Peekaboo Cohort 2 is the second program of allyours that has successfully ended. ' +
        'All project leaders learnt and grew as individuals under the guidance of mentors, got ' +
        'inspired by guest speakers and enjoyed site visits, while allyours brought more impact ' +
        'to the creatives of Burma.',
      href: '/projects',
      image: '/events/cohort-2.jpg',
    },
    {
      date: 'Past',
      kind: 'Previous',
      title: 'Cohort 1',
      description: 'The first successful allyours program, 9 creatives, 1 month, SMST.',
      details:
        'Fostering 9 creatives from different fields with SMST (Site Visits, Mentoring, Showcase, ' +
        'Talks), Peekaboo Cohort 1 marked the first successful program of allyours. Within 1 month, ' +
        'project leaders explored their creative journey, learnt and grew as individuals, and made ' +
        'strong connections with each other, while allyours catalysed its impact on the community.',
      href: '/projects',
      image: '/events/cohort-1.jpg',
    },
    {
      date: 'Past',
      kind: 'Previous',
      title: 'Pilot 2',
      description: 'The experiment, writing & storytelling in daily life, with 5 project leaders.',
      details:
        'Embracing the new beginning as an experiment, allyours introduced "Integration of writing ' +
        '& storytelling into daily lives in Burma" with Peekaboo Pilot Cohort 2, a new VRMP ' +
        '(Artist Visit, Peer-Reading, Mentoring, Two Places for showcase), with site visit places ' +
        'and mentors tailored to the needs of the 5 participating project leaders.',
      href: '/projects',
      image: '/events/pilot-2.jpg',
    },
  ] as { date: string; kind: 'Current' | 'Previous'; title: string; description: string; details?: string; href: string; image?: string }[],
  // The application (#apply). No form backend yet, so the form opens the
  // visitor's email app with their answers filled in, same as the partner page.
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
    workHint: 'A link, a paragraph, a description, finished or not.',
    button: 'Send application',
    email: 'hello@allyours.org', // TODO, real email
    note: 'Prefer email? Write to hello@allyours.org with "Peekaboo application" as the subject.', // TODO
  },
  faqTitle: 'Asked every cohort.',
  faq: [
    { q: 'How much does it cost?', a: 'Nothing. Every allyours program is free, materials included. That is the point.' },
    { q: 'What language does it run in?', a: 'Burmese and English, mixed. Write and work in whichever you think in.' }, // TODO
    { q: 'How much time does it take?', a: 'One evening session a week with your cohort, plus your own making time. Showcase weeks are busier.' }, // TODO
    { q: 'Who can apply?', a: 'Young creative people in Burma. No degree, no portfolio, no experience required, the application asks for one honest piece of work, finished or not.' }, // TODO
    { q: 'Do I need equipment?', a: 'No. If a brief needs materials, we provide them. A phone is enough to start.' }, // TODO
    { q: 'How are people chosen?', a: 'We read every application. We pick for honesty and appetite, not polish, a rough thing you actually made beats a perfect thing you copied.' }, // TODO
  ],
}

export const podcastPage = {
  kicker: 'Podcast',
  title: 'Conversations, kept whole.',
  // the word(s) drawn in the marker script inside the title
  emphasis: 'kept whole.',
  body:
    'Peekaboo by allyours is long-form talk with the people making things in Burma, ' +
    'writers, designers, organisers. No clips-first editing: the whole conversation, ' +
    'the way it happened.', // TODO
  listen: [
    { label: 'YouTube', href: 'https://youtube.com/@peekaboobyallyours?si=5katOPupq8jobREj' },
    { label: 'Spotify', href: 'https://open.spotify.com/show/6vtS5gWRPHigN3xYbWGLY9?si=QNiPmcqDQ966ybRwAoJn-w' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/19D9nvLygZ/' }
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
    cta: { label: 'Play the episode', href: 'https://www.facebook.com/share/19D9nvLygZ/' }, // TODO, episode URL
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
    { name: 'Guest name', role: 'Writer' }, // TODO, real guests
    { name: 'Guest name', role: 'Designer' },
    { name: 'Guest name', role: 'Organiser' },
    { name: 'Guest name', role: 'Poet' },
    { name: 'Guest name', role: 'Illustrator' },
    { name: 'Guest name', role: 'Editor' },
  ],
  suggest: {
    title: 'Know a voice we should hear?',
    body: 'Tell us who, a name and one line on why. We read every suggestion.', // TODO
    cta: { label: 'Suggest a guest', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=inquiry@allurs.cc&su=Guest%20suggestion' },
  },
}

export const projectsPage = {
  kicker: 'Projects',
  title: 'Everything the cohorts have made.',
  emphasis: 'made.',
  body:
    'The full archive of work made inside Peekaboo, writing from Literature Arts, visual ' +
    'work from Design Studies. Filter it down to what you came for.', // TODO
  // The real alumni archive, from the cohort showcase booklet.
  // TODO, confirm which cohort each project belongs to (all marked Cohort 3 for now).
  works: [
    { title: 'Memory Room', author: 'May Thyn Kyi', kind: 'Literature Arts', cohort: 'Cohort 3', blurb: 'A written room where memories of survival, and the women who carry them, are kept from disappearing.' },
    { title: 'POSTERS!', author: 'Saw Nyi Lin Htut', kind: 'Design Studies', cohort: 'Cohort 3', blurb: 'Films digested and re-imagined as posters, a review written in Photoshop instead of words.' },
    { title: 'Cloud-aspiring Flowers', author: 'Wah Pyo Khin', kind: 'Literature Arts', cohort: 'Cohort 3', blurb: 'Three women from different corners of Myanmar, and the lives they fight to choose for themselves.' },
    { title: 'Rewind Remake', author: 'Pan Da', kind: 'Design Studies', cohort: 'Cohort 3', blurb: 'Album covers of Burmese music legends, A to Z, remade with a present-day vibe as a tribute.' },
    { title: 'I was a girl', author: 'Khin Cherry Maung', kind: 'Literature Arts', cohort: 'Cohort 3', blurb: 'Growing up a girl in Burmese culture, in a small village on the bank of the Ayeyarwaddy.' },
    { title: 'STILL', author: 'Thit Htoo Wyne', kind: 'Design Studies', cohort: 'Cohort 3', blurb: 'A first motion-graphic piece on self-sabotage, built on the three wise monkeys, and climbing back out.' },
    { title: 'Ocean တမ်းချင်း', author: 'Myat Bhone Myint', kind: 'Literature Arts', cohort: 'Cohort 3', blurb: 'Essays about a hometown by the sea and learning to belong somewhere new.' },
    { title: 'Behind The Canvas', author: 'Lwin', kind: 'Design Studies', cohort: 'Cohort 3', blurb: 'A case study of everything it takes to turn artworks into an exhibition: people, ideas, logistics.' },
    { title: 'The Departed', author: 'Hlaing Phyo Wai', kind: 'Literature Arts', cohort: 'Cohort 3', blurb: 'A novella about losing a grandfather, and everything grief leaves behind in a family.' },
    { title: 'People & Print', author: 'Thinn Sabei Myat Thu', kind: 'Design Studies', cohort: 'Cohort 3', blurb: 'Branding for an independent printing house that wants everyone to touch print again.' },
    { title: 'Savoring Memories Once Again', author: 'Zin Lei Wah Nway', kind: 'Literature Arts', cohort: 'Cohort 3', blurb: 'An essay that tastes regional Myanmar dishes again, and the memories served with them.' },
    { title: 'What if?', author: 'Oke Moe Paing', kind: 'Design Studies', cohort: 'Cohort 3', blurb: 'A what-if rebrand of the Myanmar football league, done for the love of the game.' },
    { title: 'Step to Start', author: 'Hnin Yee Phyo', kind: 'Literature Arts', cohort: 'Cohort 3', blurb: 'Children’s stories drawn from real childhood events, helping kids feel seen and steady.' },
    { title: 'Road Sign / Awareness Poster', author: 'Kaung Khant Win', kind: 'Design Studies', cohort: 'Cohort 3', blurb: 'Road-safety posters from a cyclist who reads the signs and the traffic every day.' },
    { title: 'The Chronicle of the Taungoo Era', author: 'Phoo Pwint June Si', kind: 'Literature Arts', cohort: 'Cohort 3', blurb: 'The Taungoo era retold from the royal chronicles, written to be read by young people.' },
    { title: 'Chronicles of Nova Chrysalia', author: 'A2', kind: 'Literature Arts', cohort: 'Cohort 3', blurb: 'A fantasy novel in diary form, a princess walks out of the palace to live free in Gardenia.' },
  ],
  submit: {
    title: 'Made something in a cohort?',
    body: 'Alumni can add their work to the archive, send the piece and one line about it.', // TODO
    cta: { label: 'Submit your work', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=inquiry@allurs.cc&su=Project%20submission' },
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
    v: 'To empower creative people in Burma, with co-working spaces, professional coaching and a community that takes the work seriously.',
  },
  vision: {
    k: 'Vision',
    v: 'A generation of Burmese artists, designers and educators who never had to ask permission to start.',
  },
  storyTitle: 'How it started.',
  // The story as a timeline. TODO, real years and real events.
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
  // The team collage from the 2025 year-end report: the circle photos
  // orbit the line below on a deep blue gradient. Photos live in
  // /public/team (team-01.jpg … team-14.jpg, plus the mascot).
  teamCollage: {
    mascot: '/team/mascot.png',
    headline: { pre: 'the ', em: 'us', post: ' in' },
    sub: ['‘ for you and', 'for all of us ’'],
    photos: [
      '/team/team-01.jpg', '/team/team-02.jpg', '/team/team-03.jpg', '/team/team-04.jpg',
      '/team/team-05.jpg', '/team/team-06.jpg', '/team/team-07.jpg', '/team/team-08.jpg',
      '/team/team-09.jpg', '/team/team-10.jpg', '/team/team-11.jpg', '/team/team-12.jpg',
      '/team/team-13.jpg', '/team/team-14.jpg',
    ],
  },
  video: {
    title: 'Say hello properly.',
    note: 'A short intro video is coming here, the team, the room, the work.', // TODO, replace with the real embed
  },
  transparencyTitle: 'Transparency.',
  transparencyBody:
    'Every cohort we publish what came in and what it went to. The reports are the same ones ' +
    'partners get, nothing is edited down for the public version.', // TODO
  reports: [
    { label: '2026 mid-year report & 2025 year end report', href: 'https://drive.google.com/drive/folders/10Ah1lZb5CEuen3-A6V4ez80IrlzHtSrm?usp=sharing' },
    { label: 'Progress report, Cohort 3', href: 'https://drive.google.com/drive/folders/10Ah1lZb5CEuen3-A6V4ez80IrlzHtSrm?usp=sharing' },
  ],
  join: {
    title: 'Be a part of allyours.',
    ways: [
      { k: 'Join a cohort', v: 'Apply to Peekaboo and pick your specialization once you are in.', cta: { label: 'Apply', href: '/programs#apply' } },
      { k: 'Mentor', v: 'Give a cohort an evening a week of honest, useful feedback.', cta: { label: 'Write to us', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=inquiry@allurs.cc&su=Mentoring' } },
      { k: 'Volunteer', v: 'Events, editing, subtitles, logistics, the unglamorous work that makes it run.', cta: { label: 'Write to us', href: 'https://allyours.fillout.com/t/x1SrEBquRXus' } },
    ],
  },
}

export const mentorsPage = {
  kicker: 'Mentors',
  title: 'The people giving their evenings.',
  emphasis: 'their evenings.',
  body:
    'Every cohort runs on working writers, designers and artists who show up once a week ' +
    'to read, critique and push the work further. These are the mentors of the Literature ' +
    'Arts and Design Studies programs.',
  // Mentors belong to a program, not a specific cohort. cohorts/projects
  // stay empty (the card hides those sections) until there is something
  // real to show.
  mentors: [
    {
      name: 'Teno',
      discipline: 'Literature Arts',
      about:
        'A writer, screenwriter and interpreter (b. 1995, Yangon). Author of three short ' +
        'story collections: The Closest Stranger, Paloma, and The Lost Cat, The Lost Path. He is ' +
        'focused now on filmmaking and screenwriting, and writing in English for ' +
        'international projects.',
      cohorts: [],
      projects: [],
      photo: '/mentors/teno.jpg',
    },
    {
      name: 'Sabal Phyu Nu',
      discipline: 'Literature Arts',
      about:
        'A novelist from Kachin State writing since 2006, six novels, story and essay ' +
        'collections and children’s fiction, with National Literature Awards for the novel ' +
        'မြောက်ဖျားက အလွမ်းရာသီ and her children’s stories.',
      cohorts: [],
      projects: [],
      photo: '/mentors/sabal-phyu-nu.jpg',
    },
    {
      name: 'Aung Phyoe',
      discipline: 'Literature Arts',
      about:
        'A writer, director, film editor and translator based in Yangon. His short films ' +
        'Cobalt Blue and Evening Clouds premiered at Locarno and SGIFF; he co-founded 3-ACT, ' +
        'publishing a cinema magazine and running film workshops.',
      cohorts: [],
      projects: [],
      photo: '/mentors/aung-phyoe.jpg',
    },
    {
      name: 'Dr. Aung Min',
      discipline: 'Literature Arts',
      about:
        'A physician, novelist and filmmaker, author of The Bad Night and Fragmentary ' +
        'Diary, screenwriter of The Monk, leader of the Ten Men artists’ collective, and a ' +
        'pioneer of art therapy for mental health at Aung Clinic.',
      cohorts: [],
      projects: [],
      photo: '/mentors/dr-aung-min.jpg',
    },
    {
      name: 'Nay Myo Set Lu',
      discipline: 'Literature Arts',
      about:
        'A writer, producer and artist from Dawei, the poetry collections Marketing and ' +
        'Black, Objects, A Kiss to Die For, the story collection 2018, Myat Kay Zin, and ' +
        'founder of Fish Tank Poetry, NanYan Visual House and VACUUM Records.',
      cohorts: [],
      projects: [],
      photo: '/mentors/nay-myo-set-lu.jpg',
    },
    {
      name: 'Nwai La',
      discipline: 'Literature Arts',
      about:
        'A writer of fiction, essays and poetry exploring sexuality, identity and the inner ' +
        'psyche, over twenty short stories and the novels Ian and A Faint Breath, written ' +
        'from Bangkok where he works as a creative manager.',
      cohorts: [],
      projects: [],
      photo: '/mentors/nwai-la.jpg',
    },
    {
      name: 'Hein Khant Lin',
      discipline: 'Design Studies',
      about:
        'Co-founder of Studio Friday, a design practice in brand identity and digital experience. ' +
        'From Myanmar, now working in Auckland, brand strategy, visual identity and website ' +
        'design, plus HKL.D-B, his independent freelance practice.',
      cohorts: [],
      projects: [],
      photo: '/mentors/hein-khant-lin.jpg',
    },
    {
      name: 'Min Ar Kar Htet (AhHtet)',
      discipline: 'Design Studies',
      about:
        'A Mon ethnic illustrator and visual development designer preserving ethnic heritage ' +
        'through art, watercolor illustration, doodle and papercut art, and stamp design. Holds ' +
        'an MBBS and a postgraduate art diploma in painting from NUAC Mandalay.',
      cohorts: [],
      projects: [],
      photo: '/mentors/min-ar-kar-htet.jpg',
    },
    {
      name: 'Aung Thant Kyaw',
      discipline: 'Design Studies',
      about:
        'A 3D motion designer and multidisciplinary artist working at the intersection of 2D & 3D ' +
        'animation, graphic design, moving images and street photography, exploring how digital ' +
        'and physical spaces shape community and collective futures.',
      cohorts: [],
      projects: [],
      photo: '/mentors/aung-thant-kyaw.jpg',
    },
    {
      name: 'Htoo Nanda Aung',
      discipline: 'Design Studies',
      about:
        'A creative designer and visual artist from Yangon bridging commercial communication ' +
        'design, contemporary illustration and fine arts. In the industry since 2017, and ' +
        'currently pursuing advanced studies in Fine Arts.',
      cohorts: [],
      projects: [],
      photo: '/mentors/htoo-nanda-aung.jpg',
    },
    {
      name: 'Mekong Kyaw Swar',
      discipline: 'Design Studies',
      about:
        'Brand identity, visual storytelling and digital creative communication specialist at ' +
        'Yoma Strategic Holdings, and the freelance practice M-Graphics, branding systems, ' +
        'campaign visuals, album artwork and creative direction.',
      cohorts: [],
      projects: [],
      photo: '/mentors/mekong-kyaw-swar.jpg',
    },
    {
      name: 'Ye Yint Maung',
      discipline: 'Design Studies',
      about:
        'A Bangkok-based lead graphic designer rooted in brand identity and illustration, with ' +
        'time at Donato, Walking Brands and MYEO, design as a tool for problem solving, always ' +
        'pushed in new directions.',
      cohorts: [],
      projects: [],
      photo: '/mentors/ye-yint-maung.jpg',
    },
  ],
  // the door for new mentors, same address as the About page uses
  join: {
    title: 'Give a cohort your evenings.',
    body:
      'One evening a week, honest feedback, a showcase at the end. If you have a working ' +
      'practice and patience to share it, we want to hear from you.', // TODO
    cta: { label: 'Write to us', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=inquiry@allurs.cc&su=Mentoring' },
  },
}

export const partnerPage = {
  kicker: 'Partner',
  title: 'Put your name where the work is.',
  emphasis: 'the work is.',
  // the offer in one sentence
  body:
    'A partnership funds one thing: free, serious creative education for young people in ' +
    'Burma, and you see exactly what your money did, every cohort.', // TODO
  cta: { label: 'Start a conversation', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=inquiry@allurs.cc' },
  benefitsTitle: 'What a partner gets.',
  statsTitle: 'The numbers for your deck.',
  statsBody:
    'Use these directly in an internal proposal, they are the same figures we publish in ' +
    'the cohort reports.', // TODO
  partnersTitle: 'Already involved.',
  reportsTitle: 'How we report back.',
  reportsBody:
    'One progress report and one budget report per cohort you fund. Written to be read, ' +
    'not filed.', // TODO
  contact: {
    title: 'Start the conversation.',
    body:
      'Tell us who you are and what you have in mind, sponsorship, mentoring, venue, ' +
      'in-kind. We reply within a week.', // TODO
    nameLabel: 'Your name',
    orgLabel: 'Organisation',
    emailLabel: 'Email',
    messageLabel: 'What do you have in mind?',
    button: 'Send it',
    // Until a form backend is connected, the button opens an email instead.
    email: 'hello@allyours.org', // TODO, real email
    note: 'Prefer email? Write to hello@allyours.org directly.', // TODO
  },
}

export const footer = {
  blurb:
    'allyours is a non-profit working across art, design and education in Burma, ' +
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
        { label: 'YouTube', href: 'https://youtube.com/@peekaboobyallyours?si=5katOPupq8jobREj' },
        { label: 'Spotify', href: 'https://open.spotify.com/show/6vtS5gWRPHigN3xYbWGLY9?si=QNiPmcqDQ966ybRwAoJn-w' },
        { label: 'Facebook', href: 'https://www.facebook.com/share/19D9nvLygZ/' },
        { label: 'Instagram', href: 'https://www.instagram.com/allyours_mm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/allyours-myanmar' },
        { label: 'Email us', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=inquiry@allurs.cc' },
      ],
    },
  ],
  legal: '© 2026 allyours. Yangon, Burma.', // TODO
}
