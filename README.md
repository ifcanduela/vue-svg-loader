# Vue Inline SVG Loader

This is a simple webpack 5 loader for SVG files meant to be used as components
in Vue 3 templates.

This loader does not do any cleanup or optimization by itself; it's meant to be
used after `svgo-loader` has removed markup like `<?xml`, `<!doctype` and
comments.

## Installation

Add it to your development dependencies:

```sh
npm i -D @ifcanduela/vue-svg-loader
```

## Recommended usage

Add a `oneOf` rule to the `module.rules` list:

```js
module: {
  rules: [
    {
      test: /\.svg$/,
      oneOf: [
        {
            resourceQuery: /(vue)/,
            use: [
              "vue-loader",
              "@ifcanduela/vue-svg-loader",
              "svgo-loader",
            ]
        },
        { type: "asset" }
      ],
    },
  ],
},
```

Import SVGs in your Vue components and add `vue` querystring
parameter to convert them into components:

```html
<script setup>
    import ArrowUp from "../icons/arrow_up.svg?vue"
<script>
```

The query string (`?vue`) will instruct webpack to use the `vue-inline-svg-loader` and turn
the SVG into a valid Vue component. This querystring parameter can be changed to anything in
the webpack config.
