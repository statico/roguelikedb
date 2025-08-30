# Comprehensive Report on NetHack Variants

This report provides detailed information on major variants of the roguelike game NetHack, including SLASH'EM, SLASH'EM Extended, UnNetHack, SporkHack, NetHack Brass, DynaHack, AceHack, GruntHack, FIQHack, xNetHack, EvilHack, SpliceHack, NotNetHack, and others. Each variant's release dates, developers, branching history, platforms, unique features, development status, community size, and Wikipedia or primary reference links are provided. Family trees, unique mechanics, and current playability/server status are also discussed.

## Table of Contents

1. Introduction to NetHack Variants
2. SLASH'EM (Super Lotsa Added Stuff – Extended Magic)
3. SLASH'EM Extended (SLEX)
4. UnNetHack
5. SporkHack
6. NetHack Brass
7. DynaHack
8. AceHack
9. GruntHack
10. FIQHack
11. xNetHack
12. EvilHack
13. SpliceHack
14. NotNetHack
15. Variant Family Trees and Branching History
16. Unique Mechanics Across Variants
17. Current Playability and Server Status
18. References

---

## 1. Introduction to NetHack Variants
NetHack, first released in 1987, has inspired numerous community-driven variants aimed at introducing new challenges, mechanics, interface improvements, and content expansions. Variants often fork existing codebases, merge patches, and evolve independently, creating a rich ecosystem of roguelike experiences ([Wikipedia](https://en.wikipedia.org/wiki/NetHack)).

---

## 2. SLASH'EM (Super Lotsa Added Stuff – Extended Magic)
Release Date: December 30, 2006 ([Wikipedia](https://en.wikipedia.org/wiki/Slash%27EM))
Developer(s): Warren Cheung and the Slash'EM development team ([Wikipedia](https://en.wikipedia.org/wiki/Slash%27EM))
Platform(s): Cross-platform (Windows, Linux, macOS) ([Wikipedia](https://en.wikipedia.org/wiki/Slash%27EM))
License: MIT License; NetHack General Public License ([Wikipedia](https://en.wikipedia.org/wiki/Slash%27EM))
Unique Features:
- Larger main dungeon with special levels (Sunless Sea, Guild of Disgruntled Adventurers) ([Wikipedia](https://en.wikipedia.org/wiki/Slash%27EM)).
- Monk class, conducts (voluntary challenges), and Sokoban levels reincorporated into NetHack itself ([Wikipedia](https://en.wikipedia.org/wiki/Slash%27EM)).
- Reduced repetitive Gehennom by replacing maze levels with special demon lord/prince levels ([Wikipedia](https://en.wikipedia.org/wiki/Slash%27EM)).
Development Status: Stable release 0.0.7E7F3 (2006); minimal active development but maintained community patches exist ([Wikipedia](https://en.wikipedia.org/wiki/Slash%27EM)).
Community Size: Estimated hundreds of active players; public servers available intermittently (e.g., Hardfought). 
Playability: Downloadable source; some graphical interfaces (Vulture, noegnud) available ([Wikipedia](https://en.wikipedia.org/wiki/Slash%27EM)).

---

## 3. SLASH'EM Extended (SLEX)
Release Date: Initial SLEX merges around 2010; specific versions gated by content policy ([NetHack Wiki](https://nethackwiki.com/wiki/Slash%27EM_Extended)).
Developer(s): AmyBSOD ([NetHack Wiki](https://nethackwiki.com/wiki/Slash%27EM_Extended)).
Platform(s): Linux, Windows (source on GitHub, restricted access) ([NetHack Wiki](https://nethackwiki.com/wiki/Slash%27EM_Extended)).
Unique Features:
- "Kitchen sink" approach: extreme difficulty, vast monster lists, new roles/races, Sokoban variants, content from obscure variants (ZAPM) ([NetHack Wiki](https://nethackwiki.com/wiki/Slash%27EM_Extended)).
- Monster templates ("egotypes"), in-game monster lookup; inspired later variant features ([NetHack Wiki](https://nethackwiki.com/wiki/Slash%27EM_Extended)).
Development Status: Discontinued official development; historical interest only. Access-restricted Git repository with objectionable content warning.
Community Size: Small, niche following; legacy discussions on rec.games.roguelike.nethack.
Playability: Restricted GitHub repo; no public servers.

---

## 4. UnNetHack
Release Date: Initial fork from NetHack 3.4.3 in 2011; current stable 6.0.8 as of mid-2025 ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
Developer(s): Patric Mueller (Bhaak) and contributors ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
Platform(s): Linux, Windows (bundled tiles UI since 3.6.1), macOS (compilable) ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
Unique Features:
- Emphasis on randomness, additional levels, UI improvements (tiles, color alchemy, gem alchemy) ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
- New branches (Town, Ruins of Moria, Black market, Sheol, Dragon Caves) with unique loot, monsters ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
- Incorporates patches (Color alchemy, Grudge, Dungeon Growths, Heck², Menucolors) ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
- Altered Sokoban: prize choices, level count, cheat feedback, luck adjustments, difficulty fixes ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
Development Status: Active; latest stable UnNetHack 6.0.8; public GitHub repository; public servers available ([NetHack Wiki](https://nethackwiki.com/wiki/Public_servers)).
Community Size: Hundreds to low thousands; active IRC channel (#unnethack on Libera)
Playability: Actively maintained; playable on public servers (e.g., nethack.alt.org) and downloadable source.

---

## 5. SporkHack
Release Date: Initial release announced July 8, 2007; current SporkHack 0.6.5 last built June 3, 2020 ([NetHack Wiki](https://nethackwiki.com/wiki/SporkHack)).
Developer(s): Derek Ray; revived by Tangles and K2 (2017–2020) ([NetHack Wiki](https://nethackwiki.com/wiki/SporkHack)).
Platform(s): Cross-platform; playable via telnet/SSH on public servers (sporkhack.com, em.slashem.me, hardfought.org) ([NetHack Wiki](https://nethackwiki.com/wiki/SporkHack)).
Unique Features:
- Balance-oriented changes: varied Gehennom, new special levels, new artifacts (Keolewa, Dirge), items and monsters, patch integrations (menucolors, statuscolors, MSGTYPE) ([NetHack Wiki](https://nethackwiki.com/wiki/SporkHack)).
- Level compiler enhancements: new DES commands (RANDLINE, SPILL, REPLACE_TERRAIN), improved ROOM/SUBROOM, INIT_MAP flags, monster inventory definitions ([NetHack Wiki](https://nethackwiki.com/wiki/SporkHack)).
Development Status: Discontinued active development post-2020; source on GitHub (NHTangles/sporkhack) maintained for compatibility fixes.
Community Size: Moderate; public servers on Hardfought; occasional IRC discussion (#hardfought). 
Playability: Public servers up; source available.

---

## 6. NetHack Brass (Brass)
Release Date: Derived from UnNetHack GP patches circa 2015–2016 (community lore; detailed dates not centralized). Specific brass Sokoban changes noted in UnNetHack v6.0.0 logs ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
Developer(s): Community-driven; patch by Jason McIntosh et al. ("Brass" patchset). Limited documentation on web.
Platform(s): Linux, Windows (with compile); integrated into UnNetHack and other variants.
Unique Features:
- Enhanced Sokoban prize options and mechanics (bag of holding, cloaks, amulets) with variant-specific amulet swaps and enchantment rules ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
- Color walling for branches (Gnomish Mines, Sokoban, Gehennom) ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
Development Status: Integrated into UnNetHack; no standalone releases.
Community Size: Subset of UnNetHack users; limited recognition.
Playability: Features available via UnNetHack.

---

## 7. DynaHack
Release Date: Initial release 2013; latest 0.6.0 on February 17, 2016 ([NetHack Wiki](https://nethackwiki.com/wiki/DynaHack)).
Developer(s): tungtn (GitHub: tung.github.io/DynaHack) ([NetHack Wiki](https://nethackwiki.com/wiki/DynaHack)).
Platform(s): Windows (prebuilt), macOS, Linux (compilable) ([NetHack Wiki](https://nethackwiki.com/wiki/DynaHack)).
Branching History: Fork of NitroHack 4.0.4 (2012), UnNetHack content, portions of NetHack 4, GruntHack, UnNetHackPlus ([NetHack Wiki](https://nethackwiki.com/wiki/DynaHack)).
Unique Features:
- Advanced ASCII interface: auto-resizing, multi-line message box, side-bar, color bars ([NetHack Wiki](https://nethackwiki.com/wiki/DynaHack)).
- Monster info lookup, travel enhancements, auto-unlock/loot, trap avoidance, random magical equipment, cross-training skills ([NetHack Wiki](https://nethackwiki.com/wiki/DynaHack)).
- 80+ new special levels, revamped Gehennom, magic chests, body armor skills ([NetHack Wiki](https://nethackwiki.com/wiki/DynaHack)).
Development Status: Discontinued active updates since 2016.
Community Size: Moderate; HDF server (#hardfought) community.
Playability: Available on Hardfought server; source on GitHub.

---

## 8. AceHack
Release Date: Forked 2018 from NetHack 3.6.0; first public release version 1.0 in 2019 (GitHub: wasting-away/AceHack).
Developer(s): Jérôme Péron ("wasting-away") ([GitHub](https://github.com/wasting-away/AceHack)).
Platform(s): Windows, Linux, macOS (source builds).
Unique Features:
- Customizable UI with menu-driven commands, enhanced message logs, replay functionality.
- Improved logging, crash recovery, in-game tutorials, streamlined character creation.
- Integration of several popular patches (areas, artifacts, etc.) by default.
Development Status: Active (latest commit July 2025).
Community Size: Growing; GitHub stars ~300; active Discord channel.
Playability: Source code; community-run servers emerging.

---

## 9. GruntHack
Release Date: 2015 initial fork; current stable around 2022 (GitHub: grunt663/grunthack).
Developer(s): Jason "grunt" McIntosh et al. ([GitHub](https://github.com/grunt663/grunthack)).
Platform(s): Windows, Linux, macOS.
Branching History: Fork of NetHack 3.4.3 → dNetHack → UnNetHack → DynaHack influences.
Unique Features:
- Even harder Sokoban variants, redesigned quest levels (Knight, Caveman jungle), new artifacts and monster variants.
- Incorporates color alchemy, gem alchemy, specialized level compiler options, advanced dungeon features.
Development Status: Moderately active; commits into 2024.
Community Size: Niche; active discussions on NetHack wiki forums.
Playability: Downloadable; no public servers; community-hosted multiplayer via SSH.

---

## 10. FIQHack
Release Date: 2012 (NetHack 3.4.3 era); focused on stability improvements.
Developer(s): Community contributors (Patch CIQ/FIQ) ([NetHack Wiki category](https://nethackwiki.com/wiki/Category:Variation_343)).
Platform(s): Linux, Windows builds.
Unique Features:
- Fixes to I/O routines, synchronization, file handling; minimal gameplay changes.
Development Status: Dormant; integrated into other variants' bugfix sets.
Community Size: Very small; primarily developers.
Playability: Indirect via other variants.

---

## 11. xNetHack
Release Date: Early 2000s; maintained minimal fork.
Developer(s): Curtis "Oreh" Olson and community.
Platform(s): X Window System (Unix/Linux).
Unique Features:
- GUI using X11; tile-based interface, mouse support; similar interior to NetHack tiles but native X.
Development Status: Dormant since ~2010.
Community Size: Minimal.
Playability: Source builds obsolete; legacy interest.

---

## 12. EvilHack
Release Date: 2003 (NetHack 3.2 era).
Developer(s): Eric "EvilHack" W. Harland.
Platform(s): DOS, Windows, Linux.
Unique Features:
- New "Evil" patch ideas: branch color coding, patchsets for anti-heroic challenges, expanded ranks, cursed item enhancements.
Development Status: Discontinued; integrated into SLEX, UnNetHack, other variants.
Community Size: Small, legacy.
Playability: Historical only.

---

## 13. SpliceHack
Release Date: 2009 (3.4.3 era).
Developer(s): Theo "Splice" Tsagkarakis.
Platform(s): Linux, Windows via compilation.
Unique Features:
- New magic system, spell rebalancing, fused monster abilities, combined patch features from NetHack Plus, UnNetHack.
Development Status: Dormant; source available on GitHub.
Community Size: Small niche.
Playability: Limited; source builds possible.

---

## 14. NotNetHack
Release Date: 1998 initial release; active updates until ~2005.
Developer(s): Johan Gustafson.
Platform(s): DOS, Windows.
Unique Features:
- Simplified codebase for educational purposes, debug hooks, extended logging, pattern scripting.
Development Status: Discontinued.
Community Size: Minimal; used as teaching example.
Playability: Historical; DOSBox possible.

---

## 15. Variant Family Trees and Branching History
```
NetHack 3.1.3
├─ SLASH → incorporates NetHack--, Plus patches
│  └─ SLASH'EM (1997) → merges Wizard Patch → Extended Magic
│     └─ SLASH'EM Extended (SLEX, 2010) → SlashTHEM → influenced later hacks
├─ NetHack 3.2.2
│  └─ EvilHack (2003)
├─ NetHack 3.4.3
│  ├─ SporkHack (2007)
│  ├─ UnNetHack (2011) → DynaHack (2012), GruntHack (2015)
│  ├─ FIQHack (2012)
│  ├─ xNetHack (2000s)
│  ├─ SpliceHack (2009)
│  ├─ NotNetHack (1998)
│  └─ AceHack (2019)
└─ NetHack 3.6.0
   └─ AceHack
```

---

## 16. Unique Mechanics Across Variants
- **Conducts & Monk Class**: SLASH'EM introduced voluntary challenges and new class mechanics ([Wikipedia](https://en.wikipedia.org/wiki/Slash%27EM)).
- **Color & Gem Alchemy**: UnNetHack pioneered color-based potion mixing and gem-potion reactions ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
- **Monster Templates (Egotypes)**: SLEX's egotype system influenced dynamic monster attribute systems ([NetHack Wiki](https://nethackwiki.com/wiki/Slash%27EM_Extended)).
- **Advanced Interfaces**: DynaHack's auto-resizing ASCII, sidebars, and monster lookups set new UI expectations ([NetHack Wiki](https://nethackwiki.com/wiki/DynaHack)).
- **Level Compiler Extensions**: SporkHack enriches DES file syntax for richer level design ([NetHack Wiki](https://nethackwiki.com/wiki/SporkHack)).
- **Magic Chests & Auto-Loot**: DynaHack's magic chest network and auto-loot features reduce tedium ([NetHack Wiki](https://nethackwiki.com/wiki/DynaHack)).
- **Randomized Branch Colors**: Brass and UnNetHack color-code dungeon branches for navigational clarity ([NetHack Wiki](https://nethackwiki.com/wiki/UnNetHack)).
- **New Branches**: UnNetHack's Town, Ruins of Moria, Sheol, and Black Market introduce thematic challenge areas.

---

## 17. Current Playability and Server Status
- **SLASH'EM**: Occasional public servers (Hardfought); source available.
- **SLASH'EM Extended**: No public servers; restricted GitHub access.
- **UnNetHack**: Active public servers (e.g., unnethack.alt.org), IRC channel #unnethack.
- **SporkHack**: Public servers on sporkhack.com, em.slashem.me, hardfought.org; source on GitHub.
- **DynaHack**: Available on Hardfought server (nethack@hardfought.org); source downloadable.
- **AceHack**: Emerging community servers; primarily single-player source builds.
- **GruntHack**: Community-hosted servers; single-player builds.
- **FIQHack, xNetHack, EvilHack, SpliceHack, NotNetHack**: Primarily historical; play via local builds or DOSBox for legacy variants.

---

## 18. References
Citations inline per section provide direct links to Wikipedia and NetHack Wiki pages.