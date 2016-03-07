angular.module('TestController_443', ['TestService'])
	.controller('Controller_443', function($scope, $state, TestService){
		console.log('enter controller_443')
		$scope.test = TestService.getTest()
	})
