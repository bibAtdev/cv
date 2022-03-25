# cv

## Project setup

1. Setup GitHub

    Setup [SSH key](https://git-scm.com/book/de/v2/Git-auf-dem-Server-Erstellung-eines-SSH-Public-Keys), and add it to [GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account), or any other SCM tool.

2. Setup  Vue project

    ```
    pnpm install
    ```

    Compiles and hot-reloads for development
    ```
    pnpm run serve
    ```

    Compiles and minifies for production
    ```
    pnpm run build
    ```

    Lints and fixes files
    ```
    pnpm run lint
    ```

    Customize configuration (Optional)

    See [Configuration Reference](https://cli.vuejs.org/config/)

3. Automaticall deploy binaries to SCM

    For Windows based OS:
    ```
    pnpm run deploy-windows
    ```

    For Linux based OS:
    ```
    pnpm run deploy-linux
    ```
