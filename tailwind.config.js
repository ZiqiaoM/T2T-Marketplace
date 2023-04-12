module.exports = {
  content: [
    "./src/pages/productDetails/[id].jsx",
    "./src/pages/post.jsx",
    "./src/pages/AllProducts.js",
    "./src/pages/New_wishlist.js",
    "./src/pages/WishListItem.jsx",
    "./src/pages/account.jsx",
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
