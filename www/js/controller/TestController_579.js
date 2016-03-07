angular.module('TestController_579', ['TestService'])
	.controller('Controller_579', function($scope, $state, TestService){
		console.log('enter controller_579')
		$scope.test = TestService.getTest()
	})
