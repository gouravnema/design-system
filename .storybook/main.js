import { StorybookConfig } from 'storybook-react-rsbuild'

const config = {
  framework: {
    name: 'storybook-react-rsbuild',
    options: {
      rsbuild: {
        environment: 'storybook', // Specify the 'storybook' environment from rsbuild.config.mjs
      },
    },
  },
  rsbuildFinal: (rsbuildConfig) => {
    // Ensure the environment is set for the Rsbuild config used by Storybook
    rsbuildConfig.environment = 'storybook';
    return rsbuildConfig;
  },
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx',
  ]
}

export default config
