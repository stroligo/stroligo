// Importar opções do config.js
const options = require('./config');

// Plugins do tailwind
const allPlugins = {
  typography: require('@tailwindcss/typography'),
  forms: require('@tailwindcss/forms'),
  lineClamp: require('@tailwindcss/line-clamp'),
  containerQueries: require('@tailwindcss/container-queries'),
};

// Looping nos plugins ativos nas opções
const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/*   Export para o Theme no WP */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './static/**/*.{html,js,php}',
    './wordpress/wp-content/themes/digiup/*.php',
    './wordpress/wp-content/themes/digiup/**/*.php',
  ],
  theme: {
    extend: options.extend,
  },
  plugins: [plugins, require('@tailwindcss/forms')],
};
