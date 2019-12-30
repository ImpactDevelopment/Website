# Impact website 2.0

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## How to use

First install npm, then run

```sh
npm install
npm start
```

This will first install all dependancies, then run a development server complete with auto-reload.

## IDE setup

### VSCode

You'll want to install the following plugins in your workspace:

-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [EditorConfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)

```sh
# Bash one-liner
for ext in "esbenp.prettier-vscode" "dbaeumer.vscode-eslint" "editorconfig.editorconfig"; do code --install-extension $ext; done
```

Alternatively use the built in **Extensions: Show Recommended Extensions** feature:

[![VSCode workspace-recommended-extensions documentation](https://code.visualstudio.com/assets/docs/editor/extension-gallery/recommendations.png)](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)

## Intellij IDEA and WebStorm

-   [ESLint](https://plugins.jetbrains.com/plugin/7494-eslint) (must be installed manually)
-   [EditorConfig](https://plugins.jetbrains.com/plugin/7294-editorconfig) (default on Intellij & WebStorm)

## Atom

- [linter](https://atom.io/packages/linter)
- [linter-eslint](https://atom.io/packages/linter-eslint)
- [editorconfig](https://atom.io/packages/editorconfig)

You can install these by running `apm i linter linter-eslint editorconfig`
