var path = require('path');

const config = {
	entry: './src/app.js',
	output: {
		//'path' should be absolute path on our harddrive, hence used path.resolve
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.app.js'
	}
};
module.exports = config;
