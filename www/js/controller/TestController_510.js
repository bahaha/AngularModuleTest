angular.module('TestController_510', ['TestService'])
	.controller('Controller_510', function($scope, $state, TestService){
		console.log('enter controller_510')
		$scope.test = TestService.getTest()
	})
