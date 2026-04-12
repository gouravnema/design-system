# Design System

A comprehensive, reusable React component library built with Rsbuild and TypeScript. This design system provides a collection of production-ready UI components, layouts, typography, and widgets designed to ensure consistency and efficiency across web applications.

## Project Description

This is a professional design system library (`@gouravnema/design-system`) that includes:

- **Components**: Reusable UI components including avatars, buttons, cards, charts, pills, textboxes, and more
- **Design System**: Pre-built design patterns including forms, tabs, progress bars, side navigation, heading styles, and styling utilities
- **Layouts**: Common layout structures for consistent page composition
- **Typography**: Font definitions and text styling utilities
- **Widgets**: Advanced components like date formatters, time formatters, modals, and form widgets
- **Theming**: Customizable theme constants for consistent styling across the library
- **Storybook Integration**: Interactive documentation and component showcase

## Installation

Install the dependencies:

```bash
npm install
```

## Running Instructions

### Development Server

Start the development server with hot module reloading:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Storybook

Run the interactive component documentation and showcase:

```bash
npm run storybook
```

Storybook will be available at [http://localhost:6060](http://localhost:6060)

### Building

Build the library for production:

```bash
npm run build
```

This will:
- Clean previous builds
- Compile the library using Rslib
- Generate TypeScript type definitions
- Build the Storybook documentation
- Output to the `lib/` and `docs/` directories

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Other Commands

- **Format code**: `npm run format` - Runs Prettier to format all files
- **Lint code**: `npm run lint` - Runs ESLint to check code quality
- **Clean**: `npm run clean` - Remove `lib` and `docs` directories

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── avatar/
│   ├── buttons/
│   ├── cards/
│   ├── charts/
│   ├── pills/
│   ├── sprites/
│   ├── textbox/
│   └── time_formatter/
├── design-system/       # Core design system components
├── layouts/             # Layout components
├── typography/          # Typography utilities and components
├── widgets/             # Advanced widgets
├── theme.constants.ts   # Theme configuration
└── index.ts            # Library entry point
```

## Contributing

We welcome contributions! Here's how you can help:

### Getting Started

1. **Fork the repository** - Create your own copy of the project
2. **Clone your fork** - `git clone <your-fork-url>`
3. **Install dependencies** - `npm install`
4. **Create a feature branch** - `git checkout -b feature/your-feature-name`

### Development Workflow

1. **Make your changes** - Add new components or fix issues
2. **Run tests and linting** - `npm run lint` to check code quality
3. **Format your code** - `npm run format` to maintain consistency
4. **Create a Storybook story** - Document your component with `npm run storybook`
5. **Commit your changes** - Follow conventional commit messages
6. **Push to your branch** - `git push origin feature/your-feature-name`
7. **Create a Pull Request** - Submit your changes for review

### Code Guidelines

- Follow the existing code style and conventions
- Write TypeScript with proper type annotations
- Create Storybook stories for new components
- Ensure all code passes linting: `npm run lint`
- Keep components focused and reusable
- Add meaningful commit messages

### Bug Reports and Feature Requests

Please open an issue on GitHub with:
- Clear description of the bug/feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Environment details (Node version, npm version, OS)

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0) - see the LICENSE file for details.

### What this means:

- **You can**: Use, modify, and distribute this software
- **You must**: 
  - Include the original license and copyright notice
  - Disclose the source code of any modifications
  - Use the same license (GPLv3) for derivative works
- **You cannot**: Hold the authors liable for any issues arising from use of this software

For more information about the GPL-3.0 license, visit [gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0.html)

## Learn More

To learn more about the technologies used in this project:

- [Rsbuild documentation](https://rsbuild.rs) - Explore Rsbuild features and APIs
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - Share feedback and contributions
- [Storybook documentation](https://storybook.js.org) - Component documentation platform
- [React documentation](https://react.dev) - The UI library framework
- [TypeScript documentation](https://www.typescriptlang.org) - For type safety

## Support

If you need help:

1. Check the [Storybook documentation](http://localhost:6060) - Run locally for interactive examples
2. Review existing issues on GitHub
3. Open a new issue with detailed information
4. Check the main project documentation

---

**Package Name**: `@gouravnema/design-system`  
**Current Version**: 1.0.43  
**Published to**: GitHub Packages  
**License**: GNU General Public License v3.0
