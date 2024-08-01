import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui',
      addCommonColors: true,
      defaultTheme: 'dark',
      defaultExtendTheme: 'dark',
      layout: {},
      themes: {
        'scifi-dark': {
          extend: 'dark',
          layout: {
            fontSize: {
              tiny: '0.75rem',
              small: '0.875rem',
              medium: '1rem',
              large: '1.125rem'
            },
            lineHeight: {
              tiny: '1rem',
              small: '1.25rem',
              medium: '1.5rem',
              large: '1.75rem'
            },
            radius: {
              small: '0.5rem',
              medium: '0.75rem',
              large: '0.875rem'
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px'
            },
            disabledOpacity: '0.5',
            dividerWeight: '1',
            hoverOpacity: '0.9'
          },
          colors: {
            default: {
              50: '#100f08',
              100: '#19170d',
              200: '#222012',
              300: '#2b2817',
              400: '#34311c',
              500: '#585544',
              600: '#7b796b',
              700: '#9f9d93',
              800: '#c2c1bb',
              900: '#e6e5e3',
              foreground: '#fff',
              DEFAULT: '#34311c'
            },
            primary: {
              50: '#4b3d06',
              100: '#77610a',
              200: '#a3850e',
              300: '#cea811',
              400: '#facc15',
              500: '#fbd53e',
              600: '#fcde67',
              700: '#fde790',
              800: '#fef0b9',
              900: '#fef9e2',
              foreground: '#000',
              DEFAULT: '#facc15'
            },
            secondary: {
              50: '#4c4829',
              100: '#797242',
              200: '#a59c5a',
              300: '#d2c672',
              400: '#fef08a',
              500: '#fef39e',
              600: '#fef5b3',
              700: '#fff8c7',
              800: '#fffbdc',
              900: '#fffdf0',
              foreground: '#000',
              DEFAULT: '#fef08a'
            },
            success: {
              50: '#39491e',
              100: '#5a7330',
              200: '#7c9d41',
              300: '#9dc853',
              400: '#bef264',
              500: '#c9f47f',
              600: '#d5f79a',
              700: '#e0f9b5',
              800: '#ecfbd1',
              900: '#f7fdec',
              foreground: '#000',
              DEFAULT: '#bef264'
            },
            warning: {
              50: '#4b2307',
              100: '#76370a',
              200: '#a24b0e',
              300: '#cd5f12',
              400: '#f97316',
              500: '#fa8c3f',
              600: '#fba468',
              700: '#fcbd90',
              800: '#fdd5b9',
              900: '#feeee2',
              foreground: '#000',
              DEFAULT: '#f97316'
            },
            danger: {
              50: '#380808',
              100: '#580d0d',
              200: '#781212',
              300: '#991717',
              400: '#b91c1c',
              500: '#c54444',
              600: '#d26b6b',
              700: '#de9393',
              800: '#eabbbb',
              900: '#f6e3e3',
              foreground: '#fff',
              DEFAULT: '#b91c1c'
            },
            background: '#000000',
            foreground: {
              50: '#4d4d4d',
              100: '#797979',
              200: '#a6a6a6',
              300: '#d2d2d2',
              400: '#ffffff',
              500: '#ffffff',
              600: '#ffffff',
              700: '#ffffff',
              800: '#ffffff',
              900: '#ffffff',
              foreground: '#000',
              DEFAULT: '#ffffff'
            },
            content1: {
              DEFAULT: '#13120a',
              foreground: '#fff'
            },
            content2: {
              DEFAULT: '#1e1c10',
              foreground: '#fff'
            },
            content3: {
              DEFAULT: '#292616',
              foreground: '#fff'
            },
            content4: {
              DEFAULT: '#34311c',
              foreground: '#fff'
            },
            focus: '#facc15',
            overlay: '#34311c',
            divider: '#ffd900'
          }
        }
      }
    })
  ]
};

export default config;
