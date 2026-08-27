/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'agentic': '#3B82F6',
        'deep-blue': '#1E3A8A',
        'charcoal': '#1F2937',
        'dark-bg': '#0F172A',
        'card-dark': '#1E293B'
      },
      spacing: {
        '30': '7.5rem'
      }
    }
  },
  plugins: []
}
