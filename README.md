# allyours — landing page

The home page for allyours, built from the site map and the goals you wrote out.

---

## Running it on your computer

Open Terminal and type these two lines, one at a time:

```
cd ~/claude-workspace/allyours-landing
pnpm dev
```

Then open **http://localhost:3000** in your browser.

To stop it, click on the Terminal window and press `Control` + `C`.

The first time only, you also need to run `pnpm install` before `pnpm dev`.

---

## Changing the words

**Everything written on the page lives in one file: `content/site.ts`.**

Open it, change the text between the quote marks, save, and the browser
updates by itself. You do not need to touch anything else.

Anywhere you see `// TODO` in that file, that is text or a number I made up
so the page would look finished. Those are the things to replace with real
allyours copy and real figures before it goes live. They are the placeholder
alumni names, the podcast episodes, the partner names, the statistics, and
the social media links.

---

## What is on the page, and why

The page is ordered as an argument, top to bottom:

| Section | What it does | Which goal it serves |
| --- | --- | --- |
| Hero | Says who allyours is, offers Apply and Donate immediately | 1 and 2 |
| Programs | Peekaboo as the parent, branching into the two specializations | 1 |
| Podcast | "Peekaboo by allyours", kept separate from programs | 3 |
| Behind allyours | Mission, vision, story, culture | 3 |
| Impact | Statistics, then what each donation amount buys | 2 |
| Alumni showcase | Proof the programs work | 1 and 3 |
| Partner | Benefits, current partners, transparency reports | 2 |
| Newsletter | The one awareness number a website can measure | 3 |

Two decisions worth knowing about, because they came from your notes:

- **The podcast is deliberately not inside the Programs section.** Its full
  name is "Peekaboo by allyours" and the Facebook page is mostly podcast
  video — so mixing it in would send podcast visitors into an application
  flow they did not ask for.
- **Peekaboo is visually much louder than the two specializations.** It is a
  large brand-blue card; Literature Arts and Design Studies are two smaller
  tinted cards joined to it by a hand-drawn fork. That is the menu /
  sub-menu relationship made visible, so nobody thinks they are three
  separate programs.

---

## Colours and type

Taken from the brand moodboard and the allyours logo files, not invented.
Electric blue is the brand — it is the logo colour and the marker squiggle,
so it is also the default accent everywhere on the site.

| | Colour | Used for |
| --- | --- | --- |
| Brand blue | `#2226c7` | logo, Peekaboo, most buttons, the newsletter panel |
| Magenta | `#f534d8` | Literature Arts |
| Mint | `#00e39b` | Design Studies, buttons on blue |
| Butter | `#ffd447` | the donation block only |

Mint and magenta are **fill** colours. As small text on white they are too
pale to read, so there are two darker versions — `mint-ink` and
`magenta-ink` — used anywhere those colours become words. If you change a
colour, change both.

Type is **Outfit** (the closest widely available match to the allyours
wordmark) with **Caveat** as the handwritten marker. The marker is used for
exactly one word per headline — the same move the brand makes with "find
your Spark". Using it more than that makes it stop meaning anything.

To change any of this, edit the top of `app/globals.css`.

## The hand-drawn bits

The loops, arrows, spirals, lightbulb and sparkles all live in
`components/doodles.tsx` as drawn shapes, not images. They take the colour
of whatever they sit inside, and they draw themselves in as you scroll.

The big looping line is the brand mark from the tote bag. It appears three
times — behind the hero, on the Peekaboo card, and in the newsletter panel.

There is also a very faint pattern of Burmese characters behind the hero,
the way the brand sheets use them as a texture.

## The other pages

The site map has Programs, About, Donate, Partner, Projects and Podcast
pages. Those exist as **placeholder pages** so every link in the menu works
instead of leading to an error. Each one lists what is planned for it.

When you want one built for real, say which page and it gets replaced.

---

## Measuring the goals

Nothing on the page is connected to analytics yet. When you are ready, the
three things worth measuring are:

1. **Applications** — how many people click Apply, versus how many finish the
   form. The gap between those two numbers is where you are losing people.
2. **Donations** — visitor to donor rate, and how many people who reach the
   donate page complete it.
3. **Awareness** — newsletter subscribers over time, plus how many visitors
   arrive by typing "allyours" or "Peekaboo" into Google.

The newsletter form currently just says thank you — it does not send the
email anywhere yet. Connecting it to Mailchimp, Buttondown or even a Google
Form is a small job when you decide which one to use.

---

## Checking how it looks

With the site running in one Terminal window, open a second window and run:

```
pnpm shots
```

It saves pictures of the whole page — desktop and phone — into a `.shots`
folder, so you can look at the full design without scrolling through it.

---

## Built with

Next.js and Tailwind CSS, the same setup as `odf-landing`. Fonts are Outfit
and Caveat, both loaded automatically — nothing to install.
