angular.module('TestController_433', ['TestService'])
	.controller('Controller_433', function($scope, $state, TestService){
		console.log('enter controller_433')
		$scope.test = TestService.getTest()
	})
