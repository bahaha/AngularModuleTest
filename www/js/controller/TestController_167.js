angular.module('starter', [
	['js/service/TestService.js']
])
.controller('Controller_167', ['$scope', 'TestService', function ($scope, TestService) {
	console.log('I\'m a controller')
	$scope.test = TestService.getTest()
}])
