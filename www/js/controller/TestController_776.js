angular.module('TestController_776', ['TestService'])
	.controller('Controller_776', function($scope, $state, TestService){
		console.log('enter controller_776')
		$scope.test = TestService.getTest()
	})
