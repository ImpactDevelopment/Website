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

-   [`esbenp.prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [`dbaeumer.vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [`editorconfig.editorconfig`](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)

```sh
# Bash one-liner
for ext in "esbenp.prettier-vscode" "dbaeumer.vscode-eslint" "editorconfig.editorconfig"; do code --install-extension $ext; done
```

Alternatively use the built in **Extensions: Show Recommended Extensions** feature:

[![VSCode workspace-recommended-extensions documentation](https://code.visualstudio.com/assets/docs/editor/extension-gallery/recommendations.png)](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)

## Intellij IDEA

-   [Prettier](https://plugins.jetbrains.com/plugin/10456-prettier)
-   [ESLint](https://plugins.jetbrains.com/plugin/7494-eslint)
-   [EditorConfig](https://plugins.jetbrains.com/plugin/7294-editorconfig) (default since 2019.2)
