angular.module('TestController_265', ['TestService'])
	.controller('Controller_265', function($scope, $state, TestService){
		console.log('enter controller_265')
		$scope.test = TestService.getTest()
	})
