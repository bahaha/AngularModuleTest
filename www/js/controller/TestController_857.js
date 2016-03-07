angular.module('TestController_857', ['TestService'])
	.controller('Controller_857', function($scope, $state, TestService){
		console.log('enter controller_857')
		$scope.test = TestService.getTest()
	})
