angular.module('TestController_278', ['TestService'])
	.controller('Controller_278', function($scope, $state, TestService){
		console.log('enter controller_278')
		$scope.test = TestService.getTest()
	})
