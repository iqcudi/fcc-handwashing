module.exports = {
    theme: {
      container: {
        center: true,
      },
    },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],

  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: ((process.env.MY_ENV_VAR === 'production') ? true : false) // disable purge in dev
  },
}

