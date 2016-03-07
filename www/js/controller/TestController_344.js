angular.module('TestController_344', ['TestService'])
	.controller('Controller_344', function($scope, $state, TestService){
		console.log('enter controller_344')
		$scope.test = TestService.getTest()
	})
