import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const config = defineConfig(({ command, envMode }) => {
  if (envMode === 'storybook') {
    console.log('Building for Storybook...');
    return {
      entry: './src/index.tsx',
      plugins: [pluginReact()],
      output: {
        distPath: {
          root: 'storybook-static'
        },
      },
    };
  }

  if (envMode === 'library') {
    console.log('Building for Library...');
    return {
      entry: './src/index.ts',
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
    entry: './src/index.tsx', // Or a default entry point
    plugins: [pluginReact()],
  };
});

export default config;
