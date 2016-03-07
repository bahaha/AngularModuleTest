angular.module('TestController_558', ['TestService'])
	.controller('Controller_558', function($scope, $state, TestService){
		console.log('enter controller_558')
		$scope.test = TestService.getTest()
	})
