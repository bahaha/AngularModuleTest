angular.module('TestController_430', ['TestService'])
	.controller('Controller_430', function($scope, $state, TestService){
		console.log('enter controller_430')
		$scope.test = TestService.getTest()
	})
