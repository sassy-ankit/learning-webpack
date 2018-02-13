## Chapter 1 - Getting Started

Bare minimum configuration to get Webpack up and running

1. To get started, first install webpack as dev-dependency in your JS project
   `$ npm install webpack --save-dev` or
   in short-hand `$ npm i webpack -D`
2. Create a `webpack.config.js` file in root redirectory
3. Bare minimum configuration to get up webpack running in `webpack.config.js`
```javascript
var path = require('path');
module.exports = config = {
	entry: './src/app.js',      // This should match with 'main' file in 'package.json'
	output: {
		//'path' should be absolute path on our harddrive, hence used path.resolve
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.app.js'
	}
};
```

4. Now, to run webpack, you need to write a simple script in `package.json` file
```javascript
"scripts": {
		"build": "webpack"
	},
```

5. That's it! Now you will get a newly file in `dist` folder named `bundle.app.js` which can be used as a single file instead all different modules/files.
