/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Dracula color palette
        terminal: {
          bg: '#282a36',        // Dracula Background
          amber: '#f1fa8c',     // Dracula Yellow
          green: '#50fa7b',     // Dracula Green
          white: '#f8f8f2',     // Dracula Foreground
          gray: '#6272a4',      // Dracula Comment
          darkgray: '#44475a',  // Dracula Selection
          red: '#ff5555',       // Dracula Red
          blue: '#bd93f9',      // Dracula Purple
          cyan: '#8be9fd',      // Dracula Cyan
          magenta: '#ff79c6',   // Dracula Pink
          yellow: '#f1fa8c',    // Dracula Yellow
        }
      },
      fontFamily: {
        // Monospace fonts for terminal feel
        mono: [
          'Source Code Pro',
          'SF Mono',
          'Monaco',
          'Inconsolata',
          'Roboto Mono',
          'Menlo',
          'Consolas',
          'DejaVu Sans Mono',
          'monospace',
        ],
      },
      fontSize: {
        // Character-based sizes
        'terminal-sm': '0.75rem',
        'terminal': '0.875rem',
        'terminal-lg': '1rem',
        'terminal-xl': '1.125rem',
      },
      spacing: {
        // Grid-based spacing that aligns to character widths
        'ch': '1ch',
        '2ch': '2ch',
        '4ch': '4ch',
        '8ch': '8ch',
        '16ch': '16ch',
      },
      borderRadius: {
        // No rounded corners for terminal aesthetic
        'none': '0',
      },
    },
  },
  plugins: [
    // Custom plugin for terminal aesthetics
    function({ addBase, addUtilities }) {
      addBase({
        'body': {
          backgroundColor: '#282a36',
          color: '#f8f8f2',
          fontFamily: '"Source Code Pro", SF Mono, Monaco, Inconsolata, Roboto Mono, Menlo, Consolas, DejaVu Sans Mono, monospace',
          fontSize: '0.875rem',
          lineHeight: '1.2',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: '"Source Code Pro", SF Mono, Monaco, Inconsolata, Roboto Mono, Menlo, Consolas, DejaVu Sans Mono, monospace',
          fontWeight: 'bold',
        },
        'pre, code': {
          fontFamily: '"Source Code Pro", SF Mono, Monaco, Inconsolata, Roboto Mono, Menlo, Consolas, DejaVu Sans Mono, monospace',
        },
      });
      
      addUtilities({
        '.terminal-border': {
          border: '1px solid #f8f8f2',
          borderRadius: '0',
        },
        '.terminal-box': {
          border: '1px solid #f8f8f2',
          backgroundColor: '#282a36',
          color: '#f8f8f2',
          padding: '0.5rem',
        },
        '.terminal-button': {
          border: '1px solid #f8f8f2',
          backgroundColor: 'transparent',
          color: '#f8f8f2',
          padding: '0.25rem 0.5rem',
          cursor: 'pointer',
          transition: 'none',
          '&:hover': {
            backgroundColor: '#44475a',
            color: '#f1fa8c',
          }
        },
        '.ascii-art': {
          fontFamily: '"Source Code Pro", SF Mono, Monaco, Inconsolata, monospace',
          whiteSpace: 'pre',
          lineHeight: '1',
        },
        '.grid-layout': {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 1ch)',
        }
      });
    }
  ],
}