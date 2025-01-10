/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'secondary': '#FFA000', // Add your custom color with a name
        'primary': '#FBC02D',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': '#4F46E5', // Example primary color
        'secondary': '#FED639', // Example secondary color
        'accent': '#F59E0B', // Example accent color
        'background': '#F3F4F6', // Example background color
        'text-primary': '#FFFACD', // Example text color
        'text-secondary': '#6B7280', 
        'background-primary': '#F3F4F6', // Light gray
        'background-secondary': '#FFFFFF', // White
        'background-accent': '#E5E7EB', // Darker gray
        'background-dark': '#1F2937',
      },
    },
  },
  plugins: [],
};
