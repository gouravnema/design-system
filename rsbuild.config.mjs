import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';


const config = {
  environments:{
    storybook:{
        entry: './src/index.jsx',
        plugins: [pluginReact()],
        output:{
          distPath: {
            root:'storybook-static'
          },
        }
    },
    library:{
        entry: './library.js',
        plugins: [pluginReact()],
        output:{
          target:'node',
          distPath: {
            root:'lib'
          },
        }
    }
  }

}


export default defineConfig(config);
