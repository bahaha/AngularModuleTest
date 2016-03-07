angular.module('TestController_585', ['TestService'])
	.controller('Controller_585', function($scope, $state, TestService){
		console.log('enter controller_585')
		$scope.test = TestService.getTest()
	})
