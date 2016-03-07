angular.module('TestController_332', ['TestService'])
	.controller('Controller_332', function($scope, $state, TestService){
		console.log('enter controller_332')
		$scope.test = TestService.getTest()
	})
