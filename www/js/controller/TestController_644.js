angular.module('TestController_644', ['TestService'])
	.controller('Controller_644', function($scope, $state, TestService){
		console.log('enter controller_644')
		$scope.test = TestService.getTest()
	})
