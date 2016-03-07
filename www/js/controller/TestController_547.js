angular.module('TestController_547', ['TestService'])
	.controller('Controller_547', function($scope, $state, TestService){
		console.log('enter controller_547')
		$scope.test = TestService.getTest()
	})
