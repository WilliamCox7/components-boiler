import resolveConfig from 'tailwindcss/resolveConfig';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindConfig = require('../tailwind.config.js');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const theme: any = resolveConfig(tailwindConfig).theme;
export default theme;
