angular.module('TestController_54', ['TestService'])
	.controller('Controller_54', function($scope, $state, TestService){
		console.log('enter controller_54')
		$scope.test = TestService.getTest()
	})
