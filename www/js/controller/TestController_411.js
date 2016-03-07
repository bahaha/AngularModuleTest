angular.module('starter', [
	['js/service/TestService.js']
])
.controller('Controller_411', ['$scope', 'TestService', function ($scope, TestService) {
	console.log('I\'m a controller')
	$scope.test = TestService.getTest()
}])
