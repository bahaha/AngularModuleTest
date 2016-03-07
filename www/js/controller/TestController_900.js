angular.module('starter', [
	['js/service/TestService.js']
])
.controller('Controller_900', ['$scope', 'TestService', function ($scope, TestService) {
	console.log('I\'m a controller')
	$scope.test = TestService.getTest()
}])
