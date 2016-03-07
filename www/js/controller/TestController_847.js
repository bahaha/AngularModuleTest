angular.module('TestController_847', ['TestService'])
	.controller('Controller_847', function($scope, $state, TestService){
		console.log('enter controller_847')
		$scope.test = TestService.getTest()
	})
