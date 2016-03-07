angular.module('TestController_264', ['TestService'])
	.controller('Controller_264', function($scope, $state, TestService){
		console.log('enter controller_264')
		$scope.test = TestService.getTest()
	})
