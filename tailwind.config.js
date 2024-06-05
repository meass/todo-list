/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#55DDFF',
        'medium-orchid': '#C058F3',
        'yankees-blue': '#25273D',
        periwinkle: '#C8CBE7',
        'dark-charcoal': '#2f2f36'
      }
    }
  },
  plugins: []
}
