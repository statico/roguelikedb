# The Origins and Impact of Early Roguelike Games (1975–1985)

This report examines the foundational titles of the roguelike genre released between 1975 and 1985, detailing their development history, technical specifications, gameplay innovations, historical significance, preservation status, and legacy. It synthesizes information from authoritative sources, with all citations formatted inline.

## 1. pedit5 (1975)

pedit5, alternately called The Dungeon, was created in late 1975 by Reginald "Rusty" Rutherford on the University of Illinois Urbana–Champaign's PLATO system over a four- to six-week period as a solo programming project in TUTOR ([Wikipedia](https://en.wikipedia.org/wiki/Pedit5)). The file was stored in the fifth program slot of Rutherford's PLATO group, giving rise to the name pedit5 ([Wikipedia](https://en.wikipedia.org/wiki/Pedit5)).

Technically, pedit5 ran on PLATO graphical terminals connected to networked IBM and CDC mainframes, supporting up to 20 saved characters and rendering a single-level dungeon of 40–50 rooms using on-screen character graphics. The game used procedural generation for monster encounters and treasure placement, stored with each character, while map layouts remained fixed due to storage constraints ([Wikipedia](https://en.wikipedia.org/wiki/Pedit5)).

Gameplay innovations include character permadeath with save-and-resume between sessions, the integration of fighter, magic user, and cleric abilities into one class, and turn-based combat resolved automatically after player action. Players navigated the overhead dungeon via keyboard, choosing to fight (F), cast spells (S), or flee (R) in encounters—a mechanic derived from Dungeons & Dragons concepts of hit points, levels, and experience ([Wikipedia](https://en.wikipedia.org/wiki/Pedit5)).

pedit5's historical significance lies in its status as the first computer dungeon crawl and one of the earliest computer role-playing games, directly influencing subsequent PLATO titles such as dnd and orthanc and establishing key roguelike tropes like procedural monster generation ([IEEE Insights](https://insight.ieeeusa.org/articles/going-rogue-a-brief-history-of-the-computerized-dungeon-crawl/), [CRC Press](https://en.wikipedia.org/wiki/Dungeons_and_Desktops)).

Graphical descriptions from PLATO emulator screenshots reveal simple ASCII-like walls and player glyphs, and limited line-of-sight rendering. Although contemporary printed reviews are minimal, PLATO Notes archives from October 1975 document administrator deletions and player debates over system resource use ([Aaron A. Reed](https://medium.com/@aareed/on-the-dating-of-two-early-crpgs-pedit5-and-dnd-47538d68f712)).

Preservation status is strong within PLATO emulator communities (e.g., Cyber1), and source code has been reconstructed from PLATO archives, enabling play on modern systems. Exact binary size is undocumented but estimated under 100 KB in TUTOR code.

## 2. dnd (1975–1985)

dnd, or The Game of Dungeons, was written in TUTOR for the PLATO system by Gary Whisenhunt and Ray Wood at Southern Illinois University in 1974–1975, with Dirk and Flint Pellett of Iowa State and University of Illinois enhancing it from 1976 to 1985 ([Wikipedia](https://en.wikipedia.org/wiki/Dnd_(1975_video_game))). The title derives from tabletop Dungeons & Dragons and was one of PLATO's first CRPGs.

This multi-level dungeon crawler featured the Whisenwood Dungeon—named for its authors—offering nonlinear progression, teleporters, item acquisition, and boss monsters such as a Golden Dragon guarding the Orb. Characters could exit to rest and later re-enter, an early rest-and-resume mechanic ([Wikipedia](https://en.wikipedia.org/wiki/Dnd_(1975_video_game))).

Technical specifications mirrored pedit5's PLATO environment: TUTOR language, character-based graphics, and memory restrictions of around 20–30 KB per process. Procedural dungeon levels and boss mechanics were key innovations, as dnd was the first to implement what are now called boss fights ([Universe Videogame List](http://www.uvlist.net/game-160118-dnd)).

Historically, dnd pioneered nonlinear dungeon design and boss mechanics, influencing later titles like Telengard and Moria. The PLATO Notes archive lacks direct dnd references, but source code printouts dated May and August 1976 survive, suggesting file sizes under ~200 KB. Preservation includes playable versions on Cyber1 and reconstructed TUTOR listings from directory archives.

## 3. Beneath Apple Manor (1978)

Don Worth's Beneath Apple Manor was released in 1978 for Apple II (16 KB RAM) by The Software Factory, with high-resolution editions (48 KB RAM) released in 1982 and 1983 by Quality Software for Apple II and Atari 8-bit platforms ([Wikipedia](https://en.wikipedia.org/wiki/Beneath_Apple_Manor)). It is recognized as the first commercial home-computer roguelike.

Gameplay consisted of top-down rooms (10 per level in lo-res, 5 in hi-res) procedurally generated each playthrough. Combat involved weapons and spells with limited mage and cleric points, refreshed on exit. The objective was to retrieve a Golden Apple from the bottom floor ([Wikipedia](https://en.wikipedia.org/wiki/Beneath_Apple_Manor)).

Innovations include procedural dungeon layouts on home hardware, a save system on cassette and floppy, and user-friendly high-res text modes. Graphics were ASCII-based or simple block characters, with Special Editions adding color and improved visuals.

Critical reception was positive: Alan Isabelle in The Space Gamer No. 35 deemed it "highly recommended," Softline praised the Special Edition's enhancements in 1983, and Scorpia of Computer Gaming World termed it "fun" despite slow speed on 16K Apple II ([Wikipedia](https://en.wikipedia.org/wiki/Beneath_Apple_Manor)).

Preservation exists via Internet Archive browser emulators; original BASIC listings are archived on Internet Archive (BAS files ~50 KB each) and in Cursor magazine reprints. No official source release, but community ports are available via RogueBasin.

## 4. DUNGEON (1979)

Brian Sawyer published DUNGEON in Cursor #15 (1979) as a PET BASIC 4 Fixed program (~192.6 KB scanned image) for the Commodore PET with 8–32 KB RAM ([Internet Archive](https://archive.org/details/Cursor_15_Dungeon_1979_Sawyer_Brian)). The game generated a random maze in ~60 seconds and displayed it via PET's graphics mode, revealing tiles only when in close proximity.

Gameplay centered on exploring a single-level labyrinth, battling or evading monsters, and collecting gold. Procedural generation and partial visibility mechanics were early examples of emergent dungeon-crawl features.

Historical impact was limited by PET's niche user base, but DUNGEON's existence highlights early adoption of roguelike concepts beyond mainframes. Preservation includes scanned magazine volumes and online PET emulation with original BASIC code.

## 5. Mines of Mordor (1979)

Scott Cunningham's Mines of Mordor (1979) for TRS-80 Model I required 16 KB RAM and was published by Electronic Imaginations. Versions 6.1 (6,563 bytes) and 6.3 (7,145 bytes) in BASIC are archived at cpmarchives.classiccmp.org ([Index](http://cpmarchives.classiccmp.org/trs80/Software/Model%201/M)).

The game featured ASCII-grid dungeons, turn-based encounters, and treasure hunts across multiple levels. Procedural generation applied to dungeon layouts and enemy/item placements, executed within TRS-80 BASIC constraints.

Mines of Mordor's influence was modest, but it exemplifies the spread of dungeon crawlers to microcomputers. Preservation includes archive downloads, emulator play, and community documentation.

## 6. Rogue (1980)

Rogue, by Michael Toy and Glenn Wichman (later Ken Arnold and Jon Lane), was included in 4BSD UNIX manuals in November 1980 as a C program leveraging the curses library (~50 KB source) on Unix minicomputers ([Wikipedia](https://en.wikipedia.org/wiki/Rogue_(video_game))). Amiga, Amstrad CPC, Atari 8-bit/ST, C64, CP/M, MS-DOS, Macintosh, TRS-80 Color Computer, Unix, and ZX Spectrum ports spanned 32–64 KB RAM environments.

Rogue introduced permadeath, procedurally generated multi-level dungeons, ASCII-based TUI, turn-based combat, and item/monster variety. Its default movement keys (h, j, k, l) from vi editor optimized player control, and procedural level design ensured replayability.

Historically, Rogue defined the roguelike genre by naming it and inspired Hack (1982) and Moria (1983). Commercial ports by Epyx (NA) and Mastertronic (EU) added graphical tiles and expanded audience. Modern open-source ports and repositories preserve source code under permissive licenses.

## 7. Telengard (1982)

Daniel M. Lawrence wrote Telengard initially for an 8 KB PET in 1978 as a rewrite of PLATO's dnd, then published a full 1982 version by Avalon Hill in BASIC (937 lines) requiring 8 KB PET or 16 KB Apple II up to 64 KB DOS ([Wikipedia](https://en.wikipedia.org/wiki/Telengard), [Mobygames](https://www.mobygames.com/game/3392/telengard)).

Telengard offered a real-time feel via timed keyboard input, a large dungeon with nine levels, ASCII character graphics, and simple combat menus. The Windows re-release by Lawrence's site provides a ~50 KB executable and data files totaling ~30 KB.

It influenced early PC RPG expectations but lacked permadeath, reducing its long-term roguelike legacy. Preservation includes abandonware downloads and community tools for dungeon generation.

## 8. Sword of Fargoal (1982)

Jeff McCord's Sword of Fargoal (1982) debuted on C64, PET, and VIC-20, requiring 64 KB (C64) or 24 KB + expander (VIC-20) RAM. Disk image sizes are ~48 KB. The game used 6502 assembly for fast performance and featured 10 dungeon levels, music (SID chip), and tile-based graphics.

Gameplay combined turn-based exploration with real-time map interaction, persistent saves to disk, and branching dungeon layouts. Special Items and hero progression added depth to roguelike mechanics.

Compute! and Zzap!64 praised Fargoal's audiovisual presentation, cementing its place as an early action–RPG hybrid. Preservation is robust via C64 emulators like VICE, with original disk images and high-score patches archived.

## 9. Hack (1982)

Jay Fenlason's Hack emerged from Rogue's BSD version in 1982 and was later open-sourced by Andries Brouwer (1984) in C (~100 KB source) on Unix, requiring ~32 KB RAM and curses library ([Wikipedia](https://en.wikipedia.org/wiki/Hack_(Unix_video_game))).

Hack added unique artifacts, shops, stairs, and item/monster diversity, and supported multi-user scoreboards. Its procedural levels and enhanced scoring system deepened roguelike complexity.

As a direct Rogue offshoot, Hack solidified community development, leading to NetHack (1987). Presently, Hack's source and binaries distribute via Unix package managers, maintaining historical and playable status.

## 10. Moria (1983)

Robert Alan Koeneke and Jimmey Wayne Todd created Moria in C for MS-DOS in 1983, requiring 64 KB RAM, monospaced ASCII graphics, and ~100 KB disk space ([Wikipedia](https://en.wikipedia.org/wiki/Moria_(1983_video_game))).

Moria introduced a minimap, vault rooms, and extended item identification, alongside guild saves, reflecting advanced dungeon mechanics. Persistent storage to disk allowed expansive dungeon sizes and richer level variety.

Moria directly inspired Angband (1990) and modern remakes like UMoria under GPL. Preservation includes source code on GitHub and executables on classicdosgames.com.

---

**Conclusion**: From pedit5's pioneering procedural single-level crawl in 1975 to Moria's expansive DOS-based dungeons in 1983, these ten games established core roguelike mechanics: procedural generation, permadeath, ASCII/TUID interfaces, and emergent gameplay. Their preservation through archived source listings, emulator communities, and ongoing open-source projects ensures accessibility and continued influence on modern procedural games and genre studies.