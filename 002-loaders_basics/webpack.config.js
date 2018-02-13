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
				test: /\.js$/
			}
		]
	}
};
module.exports = config;
