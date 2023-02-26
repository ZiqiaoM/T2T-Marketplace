module.exports = {
  content: [
    "./src/pages/productDetails/[id].jsx",
    "./src/pages/post.jsx",
    "./src/pages/AllProducts.js",
  ],
  theme: {
    // ...
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
