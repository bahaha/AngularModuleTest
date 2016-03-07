angular.module('TestController_951', ['TestService'])
	.controller('Controller_951', function($scope, $state, TestService){
		console.log('enter controller_951')
		$scope.test = TestService.getTest()
	})
