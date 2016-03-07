angular.module('TestController_16', ['TestService'])
	.controller('Controller_16', function($scope, $state, TestService){
		console.log('enter controller_16')
		$scope.test = TestService.getTest()
	})
