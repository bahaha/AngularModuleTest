angular.module('TestController_456', ['TestService'])
	.controller('Controller_456', function($scope, $state, TestService){
		console.log('enter controller_456')
		$scope.test = TestService.getTest()
	})
