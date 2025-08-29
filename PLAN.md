# Roguelike Database - Simplified Project Plan

## Overview

A comprehensive, searchable database of roguelike games built with three core directories: `media/` (Git LFS), `data/` (YAML files), and `web/` (Astro site with TypeScript and pnpm).

## Project Structure

```
roguelikedb/
├── media/                    # ▣ All images, videos (Git LFS managed)
│   ├── nethack/              #    Media files for nethack.yaml
│   │   ├── screenshot.png
│   │   ├── logo.png
│   │   └── trailer.mp4
│   ├── slay-the-spire/       #    Media files for slay-the-spire.yaml
│   └── ...                   #    One directory per game slug
├── data/                     # ▦ YAML game entries
│   ├── nethack.yaml          #    Individual game data files
│   ├── slay-the-spire.yaml
│   └── ...                   #    Filename = game slug
├── docs/                     # ▤ Documentation
│   └── schema.json           #    JSON Schema for YAML validation
└── web/                      # ▧ Astro + TypeScript + pnpm
    ├── src/
    ├── public/ -> ../media/   #    Symlink to media directory
    ├── package.json
    └── pnpm-lock.yaml
```

## Key Features

1. **Simplified Media Management**: Media files organized by game slug matching YAML filenames
2. **No Complex Tooling**: Static site generation with built-in validation
3. **JSON Schema Validation**: Industry-standard YAML validation using JSON Schema
4. **Lineage Tracking**: Fork/parent relationships between games
5. **Claude Code Integration**: Automated research using MCP web search
6. **TypeScript + pnpm**: Modern web development stack

## Implementation Plan

### Phase 1: Core Infrastructure

1. **Initialize Git LFS**
   - Set up `.gitattributes` for media files (jpg, png, mp4, etc.)
   - Configure LFS tracking

2. **Create Directory Structure**
   - `media/` with per-game subdirectories matching slugs
   - `data/` directory for YAML files
   - `docs/` directory for documentation

3. **JSON Schema Definition**
   - Create `docs/schema.json` using JSON Schema format
   - Include fork/lineage relationship fields
   - Support validation in editors (VS Code, etc.)

### Phase 2: Data Migration & Enhancement

4. **Migrate Existing Data**
   - Copy existing YAML files to `data/`
   - Organize media files by game slug in `media/`
   - Add lineage fields where known

5. **Schema Validation System**
   - JSON Schema validation in web build process
   - Editor support for real-time validation
   - Error reporting for invalid entries

### Phase 3: Web Interface (TypeScript + pnpm)

6. **Astro Site Setup**
   - Initialize Astro project with TypeScript in `web/`
   - Configure pnpm as package manager
   - Set up TailwindCSS, React components with TypeScript

7. **Game Pages & Listings**
   - TypeScript interfaces matching JSON Schema
   - Individual game pages generated from YAML data
   - Main listing with filtering/searching
   - Lineage visualization (family trees)
   - Automatic slug detection from YAML filenames

8. **Media Integration**
   - Symlink `web/public/media` -> `../media`
   - Image optimization and responsive serving
   - Video embedding support
   - Automatic media file discovery per game slug

### Phase 4: Research Automation

9. **Claude Code Research Integration**
   - Scripts to search for missing roguelikes using MCP web search
   - Automated YAML generation templates
   - Media file discovery and downloading
   - Validation and review workflows

10. **Ongoing Maintenance**
    - Regular research sessions to find new games
    - Community contribution workflows
    - Data quality improvements

## Enhanced Schema Features

### Lineage Tracking

```yaml
# New fields for game relationships
lineage:
  forked_from: "nethack"              # Direct parent game slug
  parent_games: ["rogue", "moria"]    # Ancestral influences (slugs)
  notable_forks: ["slashem", "unnethack"]  # Popular derivatives (slugs)
  fork_type: "major_variant"          # Type of fork relationship
```

### Fork Types
- `direct_fork` - Code fork with modifications
- `major_variant` - Significant gameplay changes
- `spiritual_successor` - Inspired by but rewritten
- `commercial_adaptation` - Licensed/commercial version
- `community_continuation` - Community takeover

## JSON Schema Benefits

- **Editor Support**: VS Code and other editors provide real-time validation
- **Industry Standard**: JSON Schema is widely supported and portable
- **Build Integration**: Easy validation during web build process
- **Type Generation**: Can generate TypeScript types from schema
- **Documentation**: Schema serves as documentation for data structure

## TypeScript Integration

- **Type Safety**: TypeScript interfaces generated from JSON Schema
- **Build-time Validation**: Compilation catches schema violations
- **Developer Experience**: IntelliSense for game data structures
- **Component Props**: Strongly typed React components

## Research Automation Strategy

1. **Systematic Discovery**
   - Wikipedia roguelike lists
   - RogueBasin comprehensive listings
   - Steam/itch.io roguelike tags
   - Reddit communities and discussions

2. **Automated Data Gathering**
   - Web scraping for basic game info
   - Steam API for release dates, descriptions
   - Image collection from official sources
   - Media file organization by slug

3. **Quality Assurance**
   - JSON Schema validation
   - Duplicate detection by slug
   - Link validation
   - Media file optimization

## Success Criteria

- [ ] Complete directory structure with slug-based organization
- [ ] JSON Schema for YAML validation
- [ ] Enhanced schema with lineage tracking
- [ ] Working Astro + TypeScript website with game pages
- [ ] Git LFS properly managing media files
- [ ] Schema validation integrated into build
- [ ] Research automation scripts functional
- [ ] Community contribution guidelines

## Design Guidelines

### Visual Aesthetic - Classic Terminal Roguelike

- **No Modern UI Elements**: No drop shadows, gradients, or rounded corners
- **Sharp, Pixelated Edges**: Everything should feel like a classic terminal interface
- **Monospace Typography**: Use monospace fonts for that authentic roguelike feel
- **High Contrast**: Stick to classic terminal color schemes (amber on black, green on black, etc.)
- **ASCII Art**: Use ASCII art and box-drawing characters for visual elements
- **Grid-Based Layout**: Align everything to character grids like classic roguelikes

### Typography & Symbols

- **No Emoji**: Avoid modern emoji entirely
- **Unicode Symbols**: Use appropriate unicode characters:
  - Box Drawing: ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼ │ ─
  - Geometric: ▲ ▼ ◆ ■ □ ▪ ▫ ● ○ 
  - Mathematical: × ÷ ± ≤ ≥ ≠ ≈ ∞ ∑ ∏
  - Dingbats: ★ ☆ ✓ ✗ ※ ⚡ ⚠ ⌘ ⌊ ⌋
  - Arrows: → ← ↑ ↓ ⇒ ⇐ ⇑ ⇓

### Color Palette

- **Classic Terminal Colors**: Amber (#FFB000), Green (#00FF00), White (#FFFFFF)
- **Dark Backgrounds**: Pure black (#000000) or very dark grays
- **Accent Colors**: Classic roguelike colors (red for danger, blue for magic, etc.)
- **No Gradients**: Solid colors only, no smooth transitions

### Layout Principles

- **Character Grid**: Everything aligned to a character-based grid system
- **Minimal Padding**: Use consistent, small padding that feels terminal-like
- **Sharp Borders**: 1px solid borders, no border-radius
- **Table-Based Design**: Embrace table layouts for data presentation
- **ASCII Separators**: Use characters like ─ ═ ┅ for visual separation

## Technical Stack

- **Frontend**: Astro + TypeScript + React
- **Package Manager**: pnpm
- **Styling**: TailwindCSS (configured for terminal aesthetic)
- **Data Format**: YAML with JSON Schema validation
- **Media Storage**: Git LFS with slug-based organization
- **Research**: Claude Code + MCP web search
- **Deployment**: Static site generation

## Web Interface Design Examples

```
┌─────────────────────────────────────┐
│ ROGUELIKE DATABASE                  │
├─────────────────────────────────────┤
│ [A]ll Games  [S]earch  [T]ags       │
├─────────────────────────────────────┤
│ ■ NetHack          Traditional      │
│ ■ Slay the Spire   Deckbuilding     │
│ ■ Caves of Qud     Simulation       │
│ ■ DCSS             Traditional      │
└─────────────────────────────────────┘
```

```
┌──────────────────────────────────────┐
│ NETHACK                              │
├──────────────────────────────────────┤
│ Developer: NetHack DevTeam           │
│ Released:  2023-02-16                │
│ Type:      Traditional Roguelike     │
│ ────────────────────────────────────  │
│ Forks: SlashEM ● UnNetHack ● others │
│ Parent: Rogue → Moria → Hack         │
└──────────────────────────────────────┘
```

This approach eliminates complex tooling while providing a robust, maintainable database of roguelike games with rich metadata, lineage tracking, and automated research capabilities, all presented with an authentic classic roguelike terminal aesthetic.

## README.md Content

The project will include a comprehensive README.md with the following sections:

### Project Description
- Comprehensive, searchable database of roguelike games
- Terminal-aesthetic web interface with structured YAML data
- Automated research tools using Claude Code and MCP web search
- Community-driven resource for discovering roguelikes

### Features
- **Comprehensive Database**: Extensive collection of roguelike games with detailed metadata
- **Rich Classification System**: Multi-dimensional taxonomy for precise game discovery
- **Terminal Web Interface**: Classic roguelike aesthetic with Astro, TypeScript, and React
- **Lineage Tracking**: Fork relationships and game genealogy visualization
- **Automated Research**: Claude Code integration for continuous game discovery
- **Media Management**: Git LFS-based media storage organized by game slug

### Project Goals
This database serves multiple communities:
- **Players**: Discover new games based on detailed preferences and filtering
- **Researchers**: Analyze genre evolution and game design patterns
- **Game Developers**: Research roguelikes for inspiration and learning
- **Content Creators**: Find games for reviews, streams, and articles

### Prerequisites
- **Node.js** (20+ recommended) and **pnpm**
- **Git LFS** for managing images and large files
- **Claude Code** for automated research (optional)

### Installation & Getting Started

```bash
# 1. Clone the repository
git clone [repository-url]
cd roguelikedb
git lfs pull  # Download images and large files

# 2. Install web interface dependencies
cd web
pnpm install

# 3. Start the development server
pnpm dev  # Then visit http://localhost:4321
```

### Contributing

#### Adding New Games
1. Create YAML file in `data/` using game slug as filename
2. Add media files to `media/[slug]/` directory
3. Follow the JSON Schema in `docs/schema.json`
4. Submit pull request with game data and media

#### Development Workflow
- Content changes don't require local development setup
- Web interface changes require Node.js and pnpm
- All YAML files are validated against JSON Schema during build
- Media files automatically discovered by slug matching

### License
- **Code**: MIT License
- **Game Data**: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
- **Media Files**: Remain copyright of respective owners, included under fair use for educational/research purposes with proper attribution

### Acknowledgments
- **Roguelike Discord**: Community and inspiration
- **RogueBasin**: Essential wiki and community resource
- **Contributors**: Everyone who helps expand and improve this database
- **Classic Roguelikes**: NetHack, Rogue, Angband, and others that inspired the aesthetic