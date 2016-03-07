angular.module('TestController_204', ['TestService'])
	.controller('Controller_204', function($scope, $state, TestService){
		console.log('enter controller_204')
		$scope.test = TestService.getTest()
	})
