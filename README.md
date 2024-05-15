## Browser support

* Chrome
* Safari
* Firefox
* Edge (we don't support IE11 anymore)


## Admin

You can get into it by going to /wp/wp-admin


## Requirements

* PHP >= 7.0
* Composer - [Install](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
* Node.js >= 10.0[Install](https://nodejs.org/en/)
* Yarn - [Install](https://yarnpkg.com/en/docs/install)


## Installation

1. Duplicate `.env.example` to `.env`

2. Run `composer install` in the root

3. Duplicate `.htaccess.example` to `.htaccess` in the theme folder

4. Set your site vhost document root to `/path/to/project/web/`

5. Set repo_url in `config/deploy.rb`

6. Set deploy files with correct credentials and urls


## Structure of your assets

To allow code splitting to work, you must specify which code is used on which page. This works as follows:

1. During development, code is divided by route. A route corresponds to a page template.
  * The Javascript and CSS for a specific template are loaded in the route.
  * In addition, there is a common.js in which all general Javascript and CSS are loaded.
  * Make sure that the syntax of the dynamic imports is correct. If you do not do this properly, your libraries will be placed in the common.js (which means you can still load them anywhere). [Info: ✂️ Code Splitting](https://parceljs.org/code_splitting.html)

2. Main.js is loaded at pageload. This piece of code then checks which route should be loaded based on the body class.


## Compiling and Linters

- Install dependencies with Yarn by running `yarn`
- You can find the build tasks in the package.json
- Serve the website by running `yarn watch`. Serve will spin up at: http://localhost:3000.
- You can create a (production ready) build by running `yarn build` or `yarn build:production`
- If you have trouble with our scss linter Stylelint you can run `yarn fix:styles` to fix most errors.
- If you have trouble with our javascript linter ESlint you can run `yarn fix:scripts` to fix most errors.
