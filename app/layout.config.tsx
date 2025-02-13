import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/victor-teles/playwright-php',
  nav: {
    title: 'PlaywrightPHP',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs/playwright',
      active: 'nested-url',
    },
  ],
};
