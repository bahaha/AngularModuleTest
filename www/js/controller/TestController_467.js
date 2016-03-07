angular.module('TestController_467', ['TestService'])
	.controller('Controller_467', function($scope, $state, TestService){
		console.log('enter controller_467')
		$scope.test = TestService.getTest()
	})
