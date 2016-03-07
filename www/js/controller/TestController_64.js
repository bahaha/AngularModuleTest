angular.module('TestController_64', ['TestService'])
	.controller('Controller_64', function($scope, $state, TestService){
		console.log('enter controller_64')
		$scope.test = TestService.getTest()
	})
