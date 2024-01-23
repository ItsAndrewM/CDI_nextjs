const { join } = require("path");

module.exports = {
  plugins: {
    tailwindcss: {
      // config: join(__dirname, "tailwind.config.js"),
    },
    autoprefixer: {
      // browsers: ["last 10 versions"]
    },
    // ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
