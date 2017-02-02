module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'./node_modules/angular/angular.js',
			'./node_modules/angular-mocks/angular-mocks.js',
            './src/jxon.factory.js',
			'./test/jxon.spec.js'
		],
		exclude: [],
		preprocessors: [],
		reporters: ['spec'],
		colors: true,
		browsers: ['Chrome'],
		singleRun: true
	});
}