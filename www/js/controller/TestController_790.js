angular.module('TestController_790', ['TestService'])
	.controller('Controller_790', function($scope, $state, TestService){
		console.log('enter controller_790')
		$scope.test = TestService.getTest()
	})
