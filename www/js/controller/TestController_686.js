angular.module('TestController_686', ['TestService'])
	.controller('Controller_686', function($scope, $state, TestService){
		console.log('enter controller_686')
		$scope.test = TestService.getTest()
	})
