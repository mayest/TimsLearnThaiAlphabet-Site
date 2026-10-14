# Website content and rendering rules

These rules apply to every update of Tim’s Learn the Thai Alphabet’s public website.

- Write all four public pages for visitors. Do not put internal development commentary, TODO/FIXME lists, agent instructions, temporary placeholders, private testing reports or unresolved implementation/legal task lists in visitor pages.
- Preserve accurate platform availability, privacy disclosures, support instructions, third-party attribution, copyright notices, source links, modification disclosures and applicable license notices. Removing internal commentary does not settle licensing questions; keep private analyses outside this public repository.
- Use conventional Thai vowel notation with exactly one dotted circle at the consonant position. Never substitute a real consonant merely to work around a browser/font rendering problem. Do not change application data to repair website rendering.
- Reuse the symbols in `assets/thai-vowels.svg` for the affected patterns. They are static diagrams composed from shared, explicitly positioned outline paths. Do not replace them with SVG text containing the same broken shaping sequence. No runtime generator, webfont or JavaScript is required.
- Give every diagram an English descriptive SVG title and a Thai text description, referenced by unique `aria-labelledby`/`aria-describedby` IDs. Keep `role="img"` and `focusable="false"`; preserve the current-color styling, inline baseline and em-based scaling.
- Before publication, inspect the diagrams in Chrome, Safari and Firefox where available, at desktop/narrow widths and enlarged text. Check one circle, mark positions, clipping, contrast, accessible names, navigation and horizontal overflow. Report untested browsers honestly.
- Keep the existing design, local CSS, protected email component and dependency-free static hosting. Do not add analytics, tracking, external scripts or remote fonts.
- Publish only approved visitor files, necessary assets and this generic contributor guide. Never copy local review folders, screenshots, private analyses, application files, learning data or credentials into this repository.

## Diagram symbols

| Symbol | Conventional pattern | Description |
| --- | --- | --- |
| `ia` | เ◌ีย | Long sara ia |
| `ia-short` | เ◌ียะ | Short sara ia |
| `uea-short` | เ◌ือะ | Short sara uea |
| `ua-short` | ◌ัวะ | Short sara ua |

For an instance, use an inline SVG with a matching viewBox, accessible title/description, and `<use href="assets/thai-vowels.svg#ia">` (or the other symbol). Copy the established page markup, assign unique title/description IDs, and set width to viewBox width / 1000 in em. Each symbol composes the single shared placeholder path with the required vowel components; no consonant stands in for it.

Letterform source: [Noto Looped Thai Regular](https://github.com/notofonts/noto-fonts/tree/main/hinted/ttf/NotoLoopedThai), Copyright 2018 The Noto Project Authors, [SIL OFL 1.1](https://github.com/notofonts/noto-fonts/blob/main/LICENSE). The full source notice is retained in the SVG metadata. The website serves outline diagrams, not a font file. Other site material retains its existing rights and notices.
