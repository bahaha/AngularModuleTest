angular.module('TestController_118', ['TestService'])
	.controller('Controller_118', function($scope, $state, TestService){
		console.log('enter controller_118')
		$scope.test = TestService.getTest()
	})
