/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  tailwindFunctions: ['clsx', 'cva'],
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss', // MUST come last
  ],
};

