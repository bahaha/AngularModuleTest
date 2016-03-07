angular.module('TestController_564', ['TestService'])
	.controller('Controller_564', function($scope, $state, TestService){
		console.log('enter controller_564')
		$scope.test = TestService.getTest()
	})
