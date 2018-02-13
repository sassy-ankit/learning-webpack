## Chapter 2 - Module Loaders

**Module Loaders are used to some pre-processing before they are added to final `bundle.app.js`. In nutshell, loaders are used to enhance the behavior of webpack in some fashion. This is one of the many features in Webpack.**

Loaders are commonly used for transpiling ES2015/ES6 code to older ES5 code (which is supported by all the browsers). Also css, images and all different types of files can be handled with the help of 'module loaders'.

I) Lets start with first commonly used loader `babel-loader`:
  * `babel-loader` is used to transpile js files from ES2015/ES6 to ES5.
  * We need three seperate module to get babel working in webpack viz. `babel-loader`, `babel-core` and `babel-present-env`

    1. `babel-loader` teaches babel how to work with `webpack`
    2. `babel-core` knows how to take in code, parse it and generate some output file
    3. `babel-present-env` sets ruleset for telling babel exactly what pieces of ES2015/6/7 syntax to look for and how to turn it into ES5 code

  * To install `webpack` and these three `babel` modules as dev-dependency

      `$ npm i -D webpack babel-loader babel-core babel-preset-env`

  * **SIDE NOTE:** In Webpack 1, loaders were referred as loaders only but from Webpack 2+, loaders are referred are module rules. Thus, in webpack config file, loader are defined as follows:

    ```sh
    module: {
      rules: [
        //Several different loaders are designated as array elements
      ]
    };
    ```

  * For babel-loader, your `webpack.config.js` file should look like this

    ```sh
    var path = require('path');
    const config = {
      entry: './src/app.js',
      output: {
        //'path' should be absolute path on our harddrive, hence used path.resolve
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.app.js'
      },
      module: {
        rules: [
          {
            use: 'babel-loader',
            //RegExp (Regular expression) to inform babel that it should look for
            // '.js' files only and not other files like css, images, etc.
            //otherwise babel will obiviously throw an error
            test: /\.js$/,

          }
        ]
      }
    };
    module.exports = config;
    ```

  * Also we need to instruct `babel` on how to convert `js` code, we need to create a file in root directory, named `.babelrc` and add the following code to it
    ```sh
    {
      "preset": ["babel-preset-env"]
    }
    ```
  Whenever babel loads up, it is going to look up to `.babelrc` file and find present defined here, after that it look for the `babel-preset-env` module installed and will run to set the rules (as loader) inside the `.js` file in our code base 

  * Now, to run webpack, you need to write a simple script in `package.json` file
  ```sh
  "scripts": {
    "build": "webpack"
  }
  ```

  * That's it! Now you will get a newly file in `dist` folder named `bundle.app.js` which can be used as a single file instead all different modules/files.