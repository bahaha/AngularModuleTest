angular.module('TestController_391', ['TestService'])
	.controller('Controller_391', function($scope, $state, TestService){
		console.log('enter controller_391')
		$scope.test = TestService.getTest()
	})
