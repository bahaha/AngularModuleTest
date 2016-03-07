angular.module('TestController_864', ['TestService'])
	.controller('Controller_864', function($scope, $state, TestService){
		console.log('enter controller_864')
		$scope.test = TestService.getTest()
	})
