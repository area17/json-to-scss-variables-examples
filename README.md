# A17 JSON to SCSS variables build examples

Demo repository to convert JSON to SCSS variables.

These examples assume you already have some familiarity with `node`, `npm`, `webpack`, `package.json` `scripts` and/or `vite`. These demo setups aren't complete; they don't control source maps, minification, JavaScript compilation, version hashing etc. Instead they serve as quick reference guides to using a tokens config JSON file with [@area17/scss-utilities](https://github.com/area17/scss-utilities).

## Using Dart SASS

Using the default Dart SASS set up as shown on the [Sass site](https://sass-lang.com/install).

Install dependencies:

```zsh
npm install @area17/scss-utilities
npm install --save-dev json-to-scss nodemon sass concurrently
```

Add scripts to your `package.json`:

```json
"scripts": {
  "build": "npm run tokens && npm run sass",
  "dev": "npm run tokens && concurrently --raw --kill-others \"npm:dev:*\"",
  "dev:sass": "sass --watch --load-path=node_modules --load-path=./ --style=expanded --no-source-map ./sass.scss:./dist/application.css",
  "dev:tokens": "npx nodemon --exitcrash --watch frontend.config.json -e json --exec npm run tokens",
  "sass": "sass --load-path=node_modules --load-path=./ --style=expanded --no-source-map ./sass.scss:./dist/application.css",
  "tokens": "node ./node_modules/.bin/json-to-scss frontend.config.json _tokens.scss --kv",
},
```

Test build `_tokens.scss`:

```zsh
npm run tokens
```

You'll need to include this `_tokens.scss` in your application SCSS file (see [`sass.scss`](https://github.com/area17/json-to-scss-variables-examples/blob/main/sass.scss))

```scss
@import '_tokens';
@import '@area17/scss-utilities/a17-scss-utilities';
```

And then test build a `application.css` using `@area17/scss-utilities` and the generated `_tokens.scss`:

```zsh
npm run sass:build
```

For development, watch the `frontend.config.json` and process:

```
npm run dev
```

Uses `nodemon` to look for changes in the JSON and concurrently runs SASS in watch mode.


## Using Webpack

Install dependencies:

```zsh
npm install @area17/scss-utilities
npm install --save-dev @epegzz/sass-vars-loader webpack webpack-cli webpack-fix-style-only-entries css-loader sass-loader style-loader sass
```

Add scripts to your `package.json`:

```json
"scripts": {
  "webpack:build": "webpack",
  "webpack:watch": "webpack --watch"
},
```

Place a copy of [`webpack.config.js`](https://github.com/area17/json-to-scss-variables-examples/blob/main/webpack.config.js) in your project root.

Unlike the pure SASS version above, you don't need to include anything else in your application SCSS (see [`webpack.scss`](https://github.com/area17/json-to-scss-variables-examples/blob/main/webpack.scss)). For Webpack, we can use [@epegzz/sass-vars-loader](https://github.com/epegzz/sass-vars-loader) to inject the variables straight into the SCSS build.

```scss
@import '@area17/scss-utilities/a17-scss-utilities';
```

To test build:

```zsh
npm run webpack:build
```

For development, watch the `frontend.config.json` and process:

```zsh
npm run webpack:watch
```

## Vite

Similar to using Dart SASS:

```zsh
npm install @area17/scss-utilities
npm install --save-dev json-to-scss nodemon sass concurrently
```

Update the scripts in your `package.json` (update the default `vite build` and `vite dev`):

```json
"scripts": {
  "build": "npm run tokens && vite build",
  "dev": "npm run tokens && concurrently --raw --kill-others \"npm:dev:*\"",
  "dev:tokens": "npx nodemon --exitcrash --watch frontend.config.json -e json --exec npm run tokens",
  "dev:vite": "vite",
  "tokens": "node ./node_modules/.bin/json-to-scss frontend.config.scss.json ./frontend/scss/_tokens.scss --kv"
},
```

Test build `_tokens.scss`:

```zsh
npm run tokens
```

Run Vite build:

```zsh
npm run build
```

Run Vite dev:

```zsh
npm run dev
```
