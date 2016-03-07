angular.module('TestController_727', ['TestService'])
	.controller('Controller_727', function($scope, $state, TestService){
		console.log('enter controller_727')
		$scope.test = TestService.getTest()
	})
