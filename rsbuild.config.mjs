import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const config = defineConfig(({ command, environment }) => {
  if (environment === 'storybook') {
    return {
      entry: './src/index.jsx',
      plugins: [pluginReact()],
      output: {
        distPath: {
          root: 'storybook-static'
        },
      },
    };
  }

  if (environment === 'library') {
    return {
      entry: './library.js',
      plugins: [pluginReact()],
      output: {
        target: 'node',
        distPath: {
          root: 'lib'
        },
      },
    };
  }

  // Default configuration if no specific environment is matched
  return {
    entry: './src/index.jsx', // Or a default entry point
    plugins: [pluginReact()],
  };
});

export default config;
