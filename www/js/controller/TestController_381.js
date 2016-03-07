angular.module('TestController_381', ['TestService'])
	.controller('Controller_381', function($scope, $state, TestService){
		console.log('enter controller_381')
		$scope.test = TestService.getTest()
	})
