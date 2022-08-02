# A17 JSON to SCSS variables build examples

Demo repository to convert JSON to SCSS variables.

These examples assume you already have some familiarity with `node`, `npm`, `webpack`, `package.json` `scripts` and the demo setups aren't complete; they don't control source maps, minification, JavaScript compilation, version hashing etc. Instead they serve as quick reference guides to using a tokens config JSON file with [@area17/scss-utilities](https://github.com/area17/scss-utilities).

## Using Dart Sass

Using the default Dart Sass set up as shown on the [Sass site](https://sass-lang.com/install).

Install dependencies:

```zsh
npm @area17/scss-utilities json-to-scss install nodemon install sass
```

Add scripts to your `package.json`:

```json
"scripts": {
  "sass:build": "sass --load-path=node_modules --load-path=./ --style=expanded --no-source-map ./sass.scss:./dist/application.css",
  "sass:watch": "sass --watch --load-path=node_modules --load-path=./ --style=expanded --no-source-map ./sass.scss:./dist/application.css",
  "tokens": "node ./node_modules/.bin/json-to-scss frontend.config.json _tokens.scss --kv",
  "tokens:watch": "npx nodemon --watch frontend.config.json ./node_modules/.bin/json-to-scss frontend.config.json _tokens.scss --kv",
  "watch": "npm run sass:watch & npm run tokens:watch"
},
```

Test build `_tokens.scss`:

```zsh
npm run tokens
```

And then test build a `application.css` using `@area17/scss-utilities` and the generated `_tokens.scss`:

```zsh
npm run sass:build
```

For development, watch the `frontend.config.json` and process:

```
npm run watch
```

Uses `nodemon` to look for changes in the JSON and concurrently runs SASS in watch mode.


## Using Webpack

Install dependencies:

```zsh
npm install @area17/scss-utilities @epegzz/sass-vars-loader webpack webpack-cli webpack-fix-style-only-entries css-loader sass-loader style-loader sass
```

Add scripts to your `package.json`:

```json
"scripts": {
  "webpack:build": "webpack",
  "webpack:watch": "webpack --watch"
},
```

Place a copy of [`webpack.config.js`](https://github.com/area17/json-to-scss-variables-examples/blob/main/webpack.config.js) in your project root.

To test build:

```zsh
npm run webpack:build
```

For development, watch the `frontend.config.json` and process:

```zsh
npm run webpack:watch
```

## TO DO

* Vite version
