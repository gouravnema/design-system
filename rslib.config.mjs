import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react'; // Using rsbuild plugin as rslib plugin-react was not found

const config = defineConfig(({ envMode }) => {

  if (envMode === 'library') {
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
      externals: ['react', 'react-dom'], // Mark React as external
    };
  }

  // Default configuration if no specific environment is matched
  return {
    lib: [
      {
        entry: {
          index: './src/index.ts',
        },
      },
    ],
    plugins: [pluginReact()],
    externals: ['react', 'react-dom'], // Mark React as external
  };
});

export default config;
