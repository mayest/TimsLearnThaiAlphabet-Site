# Website content and rendering rules

These rules apply to every update of Tim’s Learn the Thai Alphabet’s public website.

- Write all four public pages for visitors. Do not put internal development commentary, TODO/FIXME lists, agent instructions, temporary placeholders, private testing reports or unresolved implementation/legal task lists in visitor pages.
- Do not explain internal implementation details, including email obfuscation, build processes, development decisions or testing procedures, on public pages unless the information is genuinely necessary for users. Preserve required privacy disclosures, license notices and useful support information.
- Preserve accurate platform availability, privacy disclosures, support instructions, third-party attribution, copyright notices, source links, modification disclosures and applicable license notices. Removing internal commentary does not settle licensing questions; keep private analyses outside this public repository.
- Use conventional Thai vowel notation with exactly one dotted circle at the consonant position. Never substitute a real consonant merely to work around a browser/font rendering problem. Do not change application data to repair website rendering.
- Reuse the symbols in `assets/thai-vowels.svg` for the affected patterns. They are static diagrams composed from shared, explicitly positioned outline paths. Do not replace them with SVG text containing the same broken shaping sequence. No runtime generator, webfont or JavaScript is required.
- Give every diagram an English descriptive SVG title and a Thai text description, referenced by unique `aria-labelledby`/`aria-describedby` IDs. Keep `role="img"` and `focusable="false"`; preserve the current-color styling, inline baseline and em-based scaling.
- Before publication, inspect the diagrams in Chrome, Safari and Firefox where available, at desktop/narrow widths and enlarged text. Check one circle, mark positions, clipping, contrast, accessible names, navigation and horizontal overflow. Report untested browsers honestly.
- Keep the existing design, local CSS, protected email component and dependency-free static hosting. Do not add analytics, tracking, external scripts or remote fonts. Email obfuscation discourages basic scraping; it does not guarantee protection against sophisticated harvesting. Keep that implementation note in development documentation, not visitor pages.
- Publish only approved visitor files, necessary assets and this generic contributor guide. Never copy local review folders, unselected screenshots, private analyses, application files, learning data or credentials into this repository.

## Diagram symbols

| Symbol | Conventional pattern | Description |
| --- | --- | --- |
| `ia` | เ◌ีย | Long sara ia |
| `ia-short` | เ◌ียะ | Short sara ia |
| `uea-short` | เ◌ือะ | Short sara uea |
| `ua-short` | ◌ัวะ | Short sara ua |

For an instance, use an inline SVG with a matching viewBox, accessible title/description, and `<use href="assets/thai-vowels.svg#ia">` (or the other symbol). Copy the established page markup, assign unique title/description IDs, and set width to viewBox width / 1000 in em. Each symbol composes the single shared placeholder path with the required vowel components; no consonant stands in for it.

Letterform source: [Noto Looped Thai Regular](https://github.com/notofonts/noto-fonts/tree/main/hinted/ttf/NotoLoopedThai), Copyright 2018 The Noto Project Authors, [SIL OFL 1.1](https://github.com/notofonts/noto-fonts/blob/main/LICENSE). The full source notice is retained in the SVG metadata. The website serves outline diagrams, not a font file. Other site material retains its existing rights and notices.

## Activity screenshots and enlargement

- Keep the four activity screenshots in `assets/screenshots/`, with descriptive names and `-thumb` variants. Use actual Mac application captures from a verified isolated disposable Debug environment; never use live learning data, unfinished iPad screens or fabricated interfaces.
- Preserve screenshot proportions and interface content. Only crop irrelevant surroundings and test diagnostics, resize, and optimize images. Keep Thai text readable. Publish only the selected images, not source copies, fixtures, logs or test captures. Use meaningful alternative text and lazy loading for thumbnails below the first viewport.
- Keep the visible Mac-version note. Screenshots must not imply that an iPad release or App Store listing exists.
- The thumbnail anchors link directly to the larger images, so they remain useful without JavaScript. `assets/screenshot-viewer.js` progressively enhances them with a native modal dialog. Keep the Close button, Escape and outside-image dismissal, keyboard activation, native background inertness, visible focus and explicit focus restoration to the originating thumbnail. The Close button is the viewer’s only keyboard control; Tab and Shift-Tab keep focus there. Revisit that focus loop if other interactive controls are added. Preserve ordinary modified-click behavior.
- Keep the viewer within both viewport dimensions, including narrow and short landscape windows. Do not add animations or dependencies. Before publishing changes, test opening each image, all dismissal methods, focus behavior and image fit in Chrome, Safari and Firefox where available. Never claim assistive-technology or device testing that was not performed.
