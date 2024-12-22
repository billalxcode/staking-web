import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './ui/**/*.{js,ts,jsx,tsx,mdx}',
        './ui/**/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'rgba(122, 34, 201, 1)',
                    50: 'rgba(122, 34, 201, 0.05)',
                    100: 'rgba(122, 34, 201, 0.1)',
                    200: 'rgba(122, 34, 201, 0.2)',
                    300: 'rgba(122, 34, 201, 0.3)',
                    400: 'rgba(122, 34, 201, 0.4)',
                    500: 'rgba(122, 34, 201, 0.5)',
                    600: 'rgba(122, 34, 201, 0.6)',
                    700: 'rgba(122, 34, 201, 0.7)',
                    800: 'rgba(122, 34, 201, 0.8)',
                    900: 'rgba(122, 34, 201, 0.9)',
                },
                dark: {
                    background: '#1b1b1b',
                    card60: '#2a2a2a28',
                    border: 'rgba(255, 255, 255, 0.1)',
                    text: 'rgba(255, 255, 255, 0.8)',
                    border20: 'rgba(255, 255, 255, 0.2)',
                    duration: {
                        background: 'rgba(255, 255, 255, .1)',
                    },
                },
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
    },
    plugins: [],
} satisfies Config;
