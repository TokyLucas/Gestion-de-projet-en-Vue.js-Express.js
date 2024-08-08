/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.html', './node_modules/flowbite/**/*.{css,js}'],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
    darkMode: 'class',
}

