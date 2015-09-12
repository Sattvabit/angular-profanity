

angular.module('demoApp', ['angularProfanity'])

.controller('MainCtrl', function($scope) {
	console.log('MainCtrl loaded..');
	$scope.customSwears = ['ass'];
	$scope.externalSwears = 'swearWords.json';
	$scope.replaceWith = ['fun', 'stuff'];
	$scope.replaceWithHash = '#';

	$scope.profaneText = function(data, element) {
		console.log('profane text ',data, element);
		element.css('color', 'blue');
	};

	$scope.profaneTextSix = function(data, element) {

		data.forEach(function (swearWord, index) {
		    var str = '<span style="color:red;=text-decoration:underline;background-color:yellow;">' + swearWord + '</span>';
		    element.html(element.html().replace(swearWord, str));
		});
	};
})