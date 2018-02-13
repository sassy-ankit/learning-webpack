## Chapter 3 - Module Loaders - Handling CSS (Bundling CSS into JS file)

* We need two seperate module to handle CSS in webpack viz. `css-loader` and `style-loader`

  1. `css-loader` knows how to deal with CSS imports
  2. `style-loader` takes CSS imports and add them to the HTML document

* To install these dev-dependicies 
  `$ npm i -D css-loader style-loader`

  **NOTE: While handling CSS in webpack, these loaders will convert CSS to JS and to handle JS files we need babel installed (verify these NOTE)**

* To add configuration for HANDLING CSS in webpack see following snippet of code and use it in `webpack.config.js` (at respectively position)

  ```javascript
  module:{
    rules: [
      {
        use: ['style-loader', 'css-loader'], //order matter and they are applied from right to left
        test: /\.css$/
      }
    ]
  }
  ```

* To run webpack, use `scripts` in `package.json` as
    ```javascript
    scripts:{
      "build": "webpack"
    }
    ```
* Run `$ npm run build` and open `index.html` file in your favorite browser (though Google Chrome or Firefox are preferrable)

---

**It must be noted that this approach bundles the css into the js script and add it in `bundle.app.js` file which then apply styling on rendering the page. To verify this by 'inspecting' the source in CHROME or FIREFOX and you will find the `<style>` tag added in the head section of the html. Personally, I am on fence with this approach. In part 2, we are going to tweak this pipeline to generate a seperate CSS file which we can add in our HTML document manually.**