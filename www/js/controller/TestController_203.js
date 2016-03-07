angular.module('TestController_203', ['TestService'])
	.controller('Controller_203', function($scope, $state, TestService){
		console.log('enter controller_203')
		$scope.test = TestService.getTest()
	})
