/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Terminal color palette
        terminal: {
          bg: '#000000',
          amber: '#FFB000',
          green: '#00FF00',
          white: '#FFFFFF',
          gray: '#808080',
          darkgray: '#404040',
          red: '#FF0000',
          blue: '#0080FF',
          cyan: '#00FFFF',
          magenta: '#FF00FF',
          yellow: '#FFFF00',
        }
      },
      fontFamily: {
        // Monospace fonts for terminal feel
        mono: [
          'SF Mono',
          'Monaco',
          'Inconsolata',
          'Roboto Mono',
          'Source Code Pro',
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
          backgroundColor: '#000000',
          color: '#FFFFFF',
          fontFamily: 'SF Mono, Monaco, Inconsolata, Roboto Mono, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace',
          fontSize: '0.875rem',
          lineHeight: '1.2',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'SF Mono, Monaco, Inconsolata, Roboto Mono, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace',
          fontWeight: 'bold',
        },
        'pre, code': {
          fontFamily: 'SF Mono, Monaco, Inconsolata, Roboto Mono, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace',
        },
      });
      
      addUtilities({
        '.terminal-border': {
          border: '1px solid #FFFFFF',
          borderRadius: '0',
        },
        '.terminal-box': {
          border: '1px solid #FFFFFF',
          backgroundColor: '#000000',
          color: '#FFFFFF',
          padding: '0.5rem',
        },
        '.terminal-button': {
          border: '1px solid #FFFFFF',
          backgroundColor: 'transparent',
          color: '#FFFFFF',
          padding: '0.25rem 0.5rem',
          cursor: 'pointer',
          transition: 'none',
          '&:hover': {
            backgroundColor: '#FFFFFF',
            color: '#000000',
          }
        },
        '.ascii-art': {
          fontFamily: 'SF Mono, Monaco, Inconsolata, monospace',
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