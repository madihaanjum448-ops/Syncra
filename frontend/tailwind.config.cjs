/**
 * Tailwind CSS configuration with design tokens as custom theme extensions.
 */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        coral: "var(--coral)",
        marigold: "var(--marigold)",
        mint: "var(--mint)",
        periwinkle: "var(--periwinkle)",
        blush: "var(--blush)",
      },
      borderWidth: {
        DEFAULT: "2px",
      },
      borderColor: "var(--ink)",
      boxShadow: {
        hard: "4px 4px 0 var(--ink)",
      },
      borderRadius: {
        'lg': "14px",
        'xl': "18px",
      },
    },
  },
  plugins: [],
};
