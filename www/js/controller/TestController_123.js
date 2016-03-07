angular.module('TestController_123', ['TestService'])
	.controller('Controller_123', function($scope, $state, TestService){
		console.log('enter controller_123')
		$scope.test = TestService.getTest()
	})
