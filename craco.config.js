module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        process.env.NODE_ENV === "production"
          ? require("cssnano")({ preset: "advanced" })
          : undefined,
      ],
    },
  },
};
