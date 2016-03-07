angular.module('TestController_342', ['TestService'])
	.controller('Controller_342', function($scope, $state, TestService){
		console.log('enter controller_342')
		$scope.test = TestService.getTest()
	})
