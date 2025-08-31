# Roguelike Database

An **AI-driven research project** providing a comprehensive, searchable database of roguelike games. Built using **Claude Code** and **Exa AI** for systematic game discovery and documentation, with three core directories: `media/` (Git LFS), `data/` (YAML files), and `web/` (Astro site with TypeScript and pnpm).

> [!NOTE] > **🤖 AI-Powered Research**: This database was systematically researched and documented using Claude Code with Exa AI web search capabilities. Every game entry contains comprehensive research data including historical context, technical achievements, cultural impact, and community analysis.

## Features

- **Comprehensive Database**: Extensive collection of roguelike games with detailed metadata
- **Rich Classification System**: Multi-dimensional taxonomy for precise game discovery
- **Terminal Web Interface**: Classic roguelike aesthetic with Astro, TypeScript, and React
- **Lineage Tracking**: Fork relationships and game genealogy visualization
- **Automated Research**: Claude Code integration for continuous game discovery
- **Media Management**: Git LFS-based media storage organized by game slug

## Project Goals

This database serves multiple communities:

- **Players**: Discover new games based on detailed preferences and filtering
- **Researchers**: Analyze genre evolution and game design patterns
- **Game Developers**: Research roguelikes for inspiration and learning
- **Content Creators**: Find games for reviews, streams, and articles

## Project Structure

```
roguelikedb/
`-- media/                    # All images, videos (Git LFS managed)
    `-- nethack/              # Media files for nethack.yaml
        `-- screenshot.png
        `-- logo.png
        `-- trailer.mp4
    `-- slay-the-spire/       # Media files for slay-the-spire.yaml
    `-- ...                   # One directory per game slug
`-- data/                     # YAML game entries
    `-- nethack.yaml          # Individual game data files
    `-- slay-the-spire.yaml
    `-- ...                   # Filename = game slug
`-- docs/                     # Documentation
    `-- schema.json           # JSON Schema for YAML validation
`-- web/                      # Astro + TypeScript + pnpm
    `-- src/
    `-- public/media/         # Symlink to ../media
    `-- package.json
    `-- pnpm-lock.yaml
```

## Prerequisites

- **Node.js** (20+ recommended) and **pnpm**
- **Git LFS** for managing images and large files
- **Claude Code** for automated research (optional)

## Installation & Getting Started

### 1. Clone the repository

```bash
git clone [repository-url]
cd roguelikedb
git lfs pull  # Download images and large files
```

### 2. Install web interface dependencies

```bash
cd web
pnpm install
```

### 3. Start the development server

```bash
pnpm dev  # Then visit http://localhost:4321
```

### 4. Build for production

```bash
pnpm build
```

## Contributing

**User contributions are more than welcome!** While this database was built using AI-driven research, community contributions are essential for maintaining accuracy, adding missing games, and providing diverse perspectives.

### Ways to Contribute

1. **Add Missing Games**: Submit new roguelike entries with comprehensive data
2. **Improve Existing Entries**: Enhance descriptions, add missing metadata, or correct errors
3. **Contribute Media**: High-quality screenshots, logos, or gameplay videos
4. **Report Issues**: Flag inaccuracies, broken links, or outdated information
5. **Suggest Features**: Propose new classification systems or database improvements

### Adding New Games

1. Create YAML file in `data/` using game slug as filename
2. Add media files to `media/[slug]/` directory
3. Follow the JSON Schema in `docs/schema.json`
4. Submit pull request with game data and media

#### Example Game Entry

```yaml
name: "Your Roguelike"
slug: "your-roguelike"
description: "Brief description of the game"
release_date: "2024-01-01"
developers:
  - "Your Studio"
platforms:
  - "Windows"
  - "Linux"
  - "macOS"

classification:
  primary_type: "roguelike"
  subgenres:
    - "dungeon_crawler"
    - "fantasy"
  gameplay_features:
    - "turn_based"
    - "permadeath"
    - "procedural_generation"
  difficulty: "moderate"

lineage:
  forked_from: "parent-game"
  parent_games:
    - "influence-1"
    - "influence-2"
  notable_forks:
    - "fork-1"
    - "fork-2"

links:
  official_website: "https://example.com"
  steam_page: "https://store.steampowered.com/..."

tags:
  - "indie"
  - "modern"

last_updated: "2025-08-29"
```

### Development Workflow

- Content changes don't require local development setup
- Web interface changes require Node.js and pnpm
- All YAML files are validated against JSON Schema during build
- Media files automatically discovered by slug matching

## Design Philosophy

### Terminal Aesthetic Guidelines

- **No Modern UI Elements**: No drop shadows, gradients, or rounded corners
- **Sharp, Pixelated Edges**: Everything feels like a classic terminal interface
- **Monospace Typography**: Uses monospace fonts for authentic roguelike feel
- **High Contrast**: Classic terminal color schemes (amber on black, green on black, etc.)
- **ASCII Art**: Box-drawing characters for visual elements
- **Grid-Based Layout**: Align everything to character grids like classic roguelikes

### Color Palette

- **Classic Terminal Colors**: Amber (#FFB000), Green (#00FF00), White (#FFFFFF)
- **Dark Backgrounds**: Pure black (#000000) or very dark grays
- **Accent Colors**: Classic roguelike colors (red for danger, blue for magic, etc.)
- **No Gradients**: Solid colors only, no smooth transitions

## Data Schema

The database uses a comprehensive JSON Schema for validation. Key fields include:

- **Basic Info**: name, slug, description, release dates, developers
- **Classification**: primary_type, subgenres, gameplay_features, difficulty
- **Lineage**: forked_from, parent_games, notable_forks, fork_type
- **Links**: official_website, steam_page, github_repo, wiki
- **Media**: logo, screenshots, videos (auto-discovered by slug)
- **Community**: active_development, open_source, license, community_size
- **Technical**: engine, source_language, system_requirements

## Lineage System

The database tracks relationships between games:

### Fork Types

- `direct_fork` - Code fork with modifications
- `major_variant` - Significant gameplay changes
- `spiritual_successor` - Inspired by but rewritten
- `commercial_adaptation` - Licensed/commercial version
- `community_continuation` - Community takeover
- `inspired_by` - Influenced by but not directly derived

### Example Lineage

```
Rogue (1980)
  � Hack (1984)
    � NetHack (1987)
      � SlashEM (2000)
      � UnNetHack (2007)
      � NetHack 4 (2013)
```

## AI-Powered Research Methodology

This database was systematically built using **Claude Code** with **Exa AI** for comprehensive game discovery and documentation:

### 1. Systematic Game Discovery

- **Comprehensive Web Research**: Wikipedia roguelike lists, RogueBasin comprehensive listings
- **Platform Analysis**: Steam, itch.io, and mobile app stores with roguelike tags
- **Community Sources**: Reddit communities, Discord discussions, and gaming forums
- **Academic Resources**: Research papers and game development journals
- **Cross-referencing**: Multiple source verification for completeness

### 2. Deep Research Documentation

- **Historical Context**: Game development backgrounds, release timelines, and cultural significance
- **Technical Analysis**: Engine details, platform availability, and system requirements
- **Community Impact**: Player base analysis, critical reception, and cultural influence
- **Commercial Metrics**: Sales figures, review scores, and market performance
- **Educational Value**: Learning resources, development insights, and genre contributions

### 3. AI-Enhanced Quality Assurance

- **JSON Schema validation**: Automated data structure verification
- **Duplicate detection**: Cross-referencing to prevent redundant entries
- **Link validation**: Automated checking of external URLs and resources
- **Research verification**: Cross-source fact-checking for accuracy
- **Comprehensive documentation**: Every entry contains extensive research-backed information

## Technical Stack

- **Frontend**: Astro + TypeScript + React
- **Package Manager**: pnpm
- **Styling**: TailwindCSS (configured for terminal aesthetic)
- **Data Format**: YAML with JSON Schema validation
- **Media Storage**: Git LFS with slug-based organization
- **Research**: Claude Code + MCP web search
- **Deployment**: Static site generation

## Sample Games Included

The database includes sample entries for:

- **NetHack** (1987) - Classic traditional roguelike
- **Angband** (1993) - Tolkien-inspired dungeon crawler
- **Dungeon Crawl Stone Soup** (2006) - Modern traditional roguelike
- **Slay the Spire** (2019) - Roguelike deck-building game
- **Hades** (2020) - Action roguelike with narrative
- **Dead Cells** (2018) - Roguelike-Metroidvania

## License

- **Code**: MIT License
- **Game Data**: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
- **Media Files**: Remain copyright of respective owners, included under fair use for educational/research purposes with proper attribution

## Acknowledgments

- **Claude Code & Exa AI**: AI tools that made comprehensive database research possible
- **Anthropic**: For providing Claude Code development environment and AI capabilities
- **Roguelike Discord**: Community inspiration and feedback
- **RogueBasin**: Essential wiki and comprehensive roguelike resource
- **Contributors**: Everyone who helps expand and improve this database
- **Classic Roguelikes**: NetHack, Rogue, Angband, and others that inspired the terminal aesthetic
- **Open Source Community**: Developers and maintainers of the many games documented here
