angular.module('TestController_860', ['TestService'])
	.controller('Controller_860', function($scope, $state, TestService){
		console.log('enter controller_860')
		$scope.test = TestService.getTest()
	})
