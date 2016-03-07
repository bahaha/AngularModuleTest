angular.module('TestController_707', ['TestService'])
	.controller('Controller_707', function($scope, $state, TestService){
		console.log('enter controller_707')
		$scope.test = TestService.getTest()
	})
