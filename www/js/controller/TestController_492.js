angular.module('TestController_492', ['TestService'])
	.controller('Controller_492', function($scope, $state, TestService){
		console.log('enter controller_492')
		$scope.test = TestService.getTest()
	})
