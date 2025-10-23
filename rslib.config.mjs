import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react'; // Using rsbuild plugin as rslib plugin-react was not found

const config = defineConfig(({ command, environment }) => {
  if (environment === 'storybook') {
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

  if (command === 'build') {
    console.log('Building for Library...');
    return {
      lib: [
        {
          entry: {
            index: './src/index.ts',
          },
          dts: true,
        },
      ],
      plugins: [pluginReact()],
      output: {
        distPath: {
          root: 'lib'
        },
      },
      build: {
        rollupOptions: {
          external: [
            'react',
            'react-dom'
          ]
        }
      }
    };
  }

  // Default configuration if no specific environment is matched
  return {
    entry: './src/index.tsx', // Or a default entry point
    plugins: [pluginReact()],
  };
});

export default config;
