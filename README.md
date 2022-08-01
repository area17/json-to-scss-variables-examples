# A17 JSON to SCSS variables build examples

Demo repository to convert JSON to SCSS variables, to work with [@area17/scss-utilities](https://github.com/area17/scss-utilities).

Install dependencies:

```zsh
npm install
```

Test build `_tokens.scss`:

```zsh
npm run tokens
```

And then build a `application.css` using `@area17/scss-utilities` and the generated `_tokens.scss`:

```zsh
npm run sass:build
```

To watch the `frontend.config.json` and process:

```
npm run watch
```

Uses `nodemon` to look for changes in the JSON and concurrently runs SASS in watch mode.

## TO DO

* Webpack version (using [epegzz/sass-vars-loade](https://github.com/epegzz/sass-vars-loader))
* Vite version
