# Passport Portfolio Plan: Lynjai Jimenez

A planning guide for a vintage passport-themed portfolio site built with HTML, CSS, and JavaScript. All code is written by me.

---

## Assignment Requirements Checklist

| Requirement | Where it lives in the passport | Done |
|---|---|---|
| My name and where I'm from | Spread 1, ID page | [ ] |
| Link to my LinkedIn | Back cover, Contact at the Gate | [ ] |
| Link to my GitHub | Back cover, Contact at the Gate | [ ] |
| At least 3 CodeSquad Mini Course screenshots | Spread 1, project stamps | [ ] |
| A place I'd like to travel to | Spread 2, visa page | [ ] |
| 3 professions I want to explore in tech | Spread 2, Routes I'm Exploring | [ ] |
| Be creative! | The whole passport concept | [ ] |

---

## Concept: The Vintage Passport

The whole site is an open, well-worn passport resting on an olive cloth background. Visitors flip through its pages to learn who I am, where I've been, and where I'm going.

**Inspiration notes:** worn paper texture, typewriter lettering, a black-and-white photo with brass grommets, orange tape labels, faded ink stamps, and a grid of collected postage stamps. I'll use the reference as inspiration and make every detail my own.

---

## Color Palette: Vintage Passport

| Role | Color | Hex |
|---|---|---|
| Page background | Olive cloth | `#A99A34` |
| Passport pages | Dusty pink | `#DDAFA5` |
| Page edges, spine shadow, grid lines | Darker rose | `#B8887E` |
| Main text | Faded black ink | `#2E2A28` |
| Tape labels, highlights | Vintage orange | `#E8703A` |
| Stamp accent | Navy | `#243B63` |
| Stamp accent | Muted teal | `#5B9AA0` |
| "Valid" stamps, AI stamp | Purple ink | `#8A5A9E` |
| Stamp paper | Aged cream | `#F4EBD9` |

**Tips:**
- Store these as CSS variables so I can change colors in one place.
- Check readability with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/), especially faded ink on pink.

---

## Typography

All fonts are available on [Google Fonts](https://fonts.google.com).

| Role | Font options | Used for |
|---|---|---|
| Typewriter | Special Elite, Courier Prime | Field labels and values, body text |
| Handwriting | Homemade Apple, Mrs Saint Delafield | My signature |
| Stamp lettering | Staatliches, Bebas Neue | Stamp labels, headings, section titles |

**Rules for myself:**
- No more than 3 fonts total.
- Field values in ALL CAPS, like a real passport.
- Small, spaced-out capitals for labels (look up `letter-spacing` and `text-transform`).

---

## Textures and Vintage Effects

| Effect | How to achieve it (concepts to research) |
|---|---|
| Paper texture on pages | A free paper texture image layered over the pink (search Unsplash for "paper texture") |
| Olive cloth background | A subtle grain or fabric texture image |
| Book spine shadow | `linear-gradient` darkening toward the middle |
| Book lifting off the background | `box-shadow` |
| Aged photo | `filter: grayscale()` or `sepia()` |
| Brass grommets | Small circles with `border-radius: 50%` and `position: absolute` |
| Tape labels and hand-placed stamps | `transform: rotate()` by a degree or two |
| Faded ink stamps | Low `opacity`; look up `mix-blend-mode: multiply` |
| Perforated stamp edges | Search "CSS postage stamp perforated edge" |
| Dotted fill-in lines | Dotted `border-bottom` |

**Bonus idea:** With my Fine Arts and Graphic Design background, I can illustrate my own stamps, scan them, and use them as images. That makes the site one of a kind.

---

## Passport Layout: Page by Page

### Front Cover
- A navy or deep rose cover with "PASSPORT" in stamp lettering.
- My name or initials embossed below.
- Click to open (see JavaScript ideas).

### Spread 1, Left Page: ID Page

| Field | Value |
|---|---|
| 1. Forename | LYNJAI |
| 2. Surname | JIMENEZ |
| 3. Residence | MARYLAND, US |
| 4. Occupation | FULL-STACK SOFTWARE ENGINEER |
| 5. Issued by | UNIVERSITY OF MARYLAND GLOBAL CAMPUS, CLASS OF 2026 |
| 6. Languages spoken | JAVASCRIPT, TYPESCRIPT, PYTHON, HTML, CSS |
| 7. Status | ASPIRING JUNIOR SOFTWARE ENGINEER (optional) |

Also on this page:
- [ ] Black-and-white photo with brass grommets
- [ ] Orange tape label (e.g. my business name, if Intermedia Designs is mine)
- [ ] Handwritten signature
- [ ] Circular ink stamp

### Spread 1, Right Page: Project Stamps

A grid of boxes, like the reference, with stamps placed inside and a few boxes left empty.

**Required: CodeSquad Mini Course stamps (at least 3)**

| Stamp | Assignment | Color | Price |
|---|---|---|---|
| 1 | ______________ | ______ | ___¢ |
| 2 | ______________ | ______ | ___¢ |
| 3 | ______________ | ______ | ___¢ |

**Optional: Featured project stamps (second stamp page)**

| Stamp | Project | Built with |
|---|---|---|
| 4 | Advent of Blender | Next.js, TypeScript, Tailwind, Appwrite |
| 5 | CareConnect | Next.js, TypeScript, Appwrite |
| 6 | Code Sage AI | Google Gemini API, Convex |
| 7 | AI Customer Support App | Google Gemini API, Firebase |

### Spread 2, Left Page: Visa for My Dream Destination

- A full-page visa for: **______________________**
- Include a destination illustration, "Visa Type: Dream Trip," and a valid-from date.
- One or two sentences, in my own words, on why I want to go.
- Colors can shift slightly to match the destination.

### Spread 2, Right Page: Travel History and Routes

**Entry stamps (where I've been):**

| Entry stamp | Role | Dates |
|---|---|---|
| SOLVELEE, INC | Software Engineer | Aug 2024 to present |
| STANFORD CODE IN PLACE | Section Leader | 2026 (6 weeks) |
| CODEPATH | Tech Fellow | July 2024 to Sept 2025 |

**Routes I'm Exploring (3 professions):**

| Profession | Stamp motif | Color | Price | Evidence |
|---|---|---|---|---|
| Full-Stack Web Developer | A layered building or stack of pages | Navy `#243B63` | 5¢ | Advent of Blender, CareConnect |
| Mobile App Developer | A vintage phone, or two phones for iOS and Android | Teal `#5B9AA0` | 10¢ | Greeting card app at Solvelee, iOS and Android skills |
| AI Application Developer | A lightbulb, circuit, or constellation | Purple ink `#8A5A9E` | 20¢ | Code Sage AI, AI Customer Support App |

The rising prices represent career progression. Each stamp gets one or two sentences, written by me, about why the path interests me. A possible connection to mention: React Native links my React skills to mobile development.

- [ ] One empty box labeled **"Next Stop: ?"** to show I'm still exploring

### Back Cover: Contact at the Gate

- [ ] LinkedIn: linkedin.com/in/lynjai-jimenez
- [ ] GitHub: github.com/IntermediaDesigns
- [ ] Optional: personal site lynjaijimenez.dev
- Links styled as clickable stamps or luggage tags

---

## JavaScript Interactivity Ideas

| Feature | Difficulty | Concepts to research |
|---|---|---|
| Open the cover | Beginner | `addEventListener`, `classList.toggle` |
| Next / Previous buttons to change spreads | Beginner | `querySelector`, `classList` |
| Click a stamp to see its description | Beginner | `addEventListener`, `classList.toggle` |
| Click a screenshot for a larger view (lightbox) | Intermediate | Creating and showing an overlay |
| Typewriter animation for my name | Intermediate | `setTimeout` or `setInterval` |
| Stamp "thunks" onto the page when a spread opens | Intermediate | CSS keyframe animations, triggered with JS |
| 3D page turn | Advanced | `perspective`, `transform: rotateY()`, `backface-visibility` |

Start with the beginner features, then add fancier ones if time allows.

---

## Responsive Plan

- **Desktop:** two pages side by side, like an open book.
- **Tablet and phone:** pages stack on top of each other, one page at a time.
- Research media queries and test in the browser's device view.

---

## Step-by-Step Build Plan

### Step 1: Sketch on paper
- [ ] Draw the cover, spread 1, spread 2, and the back cover
- [ ] Mark where each field, stamp, and link goes

### Step 2: Gather content and assets
- [ ] At least 3 CodeSquad screenshots
- [ ] Black-and-white-friendly photo of me
- [ ] Paper and cloth texture images
- [ ] Signature (drawn and scanned, or in a handwriting font)
- [ ] Optional: my own hand-drawn stamp illustrations
- [ ] Profession and destination descriptions, written by me

### Step 3: Set up the folder
- [ ] Project folder with an HTML file, a CSS file, a JS file, and an `images` folder
- [ ] Link the CSS and JS files to the HTML

### Step 4: Build the HTML skeleton
- [ ] Semantic structure only, no styling
- [ ] One section per passport page

### Step 5: CSS foundation
- [ ] Palette as CSS variables
- [ ] Import fonts from Google Fonts
- [ ] Olive background and base text styles

### Step 6: Build the passport shape
- [ ] Two-page container (Flexbox or Grid)
- [ ] Spine shadow, paper texture, `box-shadow`

### Step 7: Style one page at a time
- [ ] ID page
- [ ] Project stamps page
- [ ] Visa page
- [ ] Travel history and routes page
- [ ] Covers

### Step 8: Make it responsive
- [ ] Media queries for stacking pages on small screens

### Step 9: Add JavaScript
- [ ] Beginner features first, then advanced ones

### Step 10: Test and polish
- [ ] Click every link
- [ ] Check spelling
- [ ] Alt text on every image
- [ ] Check contrast and readability

### Step 11: Publish
- [ ] Push to GitHub
- [ ] Turn on GitHub Pages
- [ ] Share the live link

---

## To-Do Outside the Site

- [ ] Fix the Stanford Code in Place dates on my resume (currently "Aug 2026 – May 2026")
- [ ] Choose my dream destination
- [ ] Pick which CodeSquad assignments become stamps

---

## Notes

_Ideas, sketches, and progress notes._