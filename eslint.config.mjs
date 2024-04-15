// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    ignores: [
      '**/node_modules',
      'node_modules',

      '**/pnpm-lock.yaml',
      'pnpm-lock.yaml',

      '**/storybook-static',
      'storybook-static',

      '**/!.storybook',
      '!.storybook',

      '**/dist',
      'dist',

      '.appworks-tmp/',
      'build',
    ],
  },
)
