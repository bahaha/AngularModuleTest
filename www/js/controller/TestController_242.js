angular.module('TestController_242', ['TestService'])
	.controller('Controller_242', function($scope, $state, TestService){
		console.log('enter controller_242')
		$scope.test = TestService.getTest()
	})
