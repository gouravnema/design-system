import { StorybookConfig } from 'storybook-react-rsbuild'

const config = {
  framework: 'storybook-react-rsbuild',
  rsbuildFinal: (config) => {
    // Customize the final Rsbuild config here
    return config
  },
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx',
  ]
}

export default config