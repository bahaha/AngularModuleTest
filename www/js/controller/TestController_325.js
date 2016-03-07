angular.module('starter', [
	['js/service/TestService.js']
])
.controller('Controller_325', ['$scope', 'TestService', function ($scope, TestService) {
	console.log('I\'m a controller')
	$scope.test = TestService.getTest()
}])
