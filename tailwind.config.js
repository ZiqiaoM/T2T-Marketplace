module.exports = {
  content: ["./src/pages/ProductDetails.jsx", "./src/pages/post.jsx"],
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
