angular.module('TestController_489', ['TestService'])
	.controller('Controller_489', function($scope, $state, TestService){
		console.log('enter controller_489')
		$scope.test = TestService.getTest()
	})
