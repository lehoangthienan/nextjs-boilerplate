// consult Next.js rewrites config here: https://nextjs.org/docs/api-reference/next.config.js/rewrites
const rewrites = [
  {
    source: '/health-check',
    destination: '/api/health-check',
  },
  {
    source: '/anle',
    destination: '/',
  },
  {
    source: '/gioi-thieu',
    destination: '/about',
  },
];

/**
 * Must be CommonJS for Node's server compatibility
 * in ESM, import these object as if they are named export
 * @example: import { ROUTE_PARAMS } from '~/routes';
 */
module.exports = {
  rewrites,
};
