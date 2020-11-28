# Fontsource Piazzolla

[![npm version](https://badge.fury.io/js/fontsource-piazzolla.svg)](https://www.npmjs.com/package/fontsource-piazzolla) [![Generic badge](https://img.shields.io/badge/fontsource-passing-brightgreen)](https://github.com/fontsource/fontsource) [![Monthly downloads](https://badgen.net/npm/dm/fontsource-piazzolla)](https://github.com/fontsource/fontsource) [![Total downloads](https://badgen.net/npm/dt/fontsource-piazzolla)](https://github.com/fontsource/fontsource) [![GitHub stars](https://img.shields.io/github/stars/DecliningLotus/fontsource.svg?style=social&label=Star)](https://github.com/fontsource/fontsource/stargazers)

The CSS and web font files to easily self-host the “Piazzolla” font. Please visit the main [Fontsource monorepo](https://github.com/fontsource/fontsource) to view more details on this package.

## Installation

Fontsource assumes you are using a bundler, such as Webpack, to load in CSS. Solutions like [CRA](https://create-react-app.dev/), [Gatsby](https://www.gatsbyjs.org/) and [Next.js](https://nextjs.org/) are prebuilt examples that are compatible.

```javascript
yarn add fontsource-piazzolla // npm install fontsource-piazzolla
```

Then within your app entry file or site component, import it in. For example in Gatsby, you could choose to import it into a layout template (`layout.js`), page component (`index.js`), or `gatsby-browser.js`.

```javascript
import "fontsource-piazzolla" // Defaults to weight 400 with all styles included.
```

Fontsource allows you to select weights and even individual styles, allowing you to cut down on payload sizes to the last byte! Utilizing the CSS unicode-range selector, all language subsets are accounted for.

```javascript
import "fontsource-piazzolla/500.css" // All styles included.
import "fontsource-piazzolla/900-normal.css" // Select either normal or italic.
```

Alternatively, the same solutions could be imported via SCSS!

```scss
@import "~fontsource-piazzolla/index.css";
@import "~fontsource-piazzolla/300-italic.css";
```

_These examples may not reflect actual compatibility. Please refer below._

Supported variables:

- Weights: `[100,200,300,400,500,600,700,800,900]`
- Styles: `[italic,normal]`

Finally, you can reference the font name in a CSS stylesheet, CSS Module, or CSS-in-JS.

```css
body {
  font-family: "Piazzolla";
}
```

## Additional Options

In the rare case you need to individually select a language subset and not utilize the CSS unicode-range selector, you may specify the import as follows. This is especially not recommended for languages, such as Japanese, with a large amount of characters.

```javascript
import "fontsource-piazzolla/latin-ext.css" // All weights and styles included.
import "fontsource-piazzolla/cyrillic-ext-500.css" // All styles included.
import "fontsource-piazzolla/greek-900-normal.css" // Select either normal or italic.
```

- Supported subsets: `[cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese]`

## Licensing

It is important to always read the license for every font that you use.
Most of the fonts in the collection use the SIL Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.

[Google Fonts License Attributions](https://fonts.google.com/attribution)

## Other Notes

Font version (provided by source): `v4`.

Feel free to star and contribute new ideas to this repository that aim to improve the performance of font loading, as well as expanding the existing library we already have. Any suggestions or ideas can be voiced via an [issue](https://github.com/fontsource/fontsource/issues).