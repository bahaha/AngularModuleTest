angular.module('TestController_939', ['TestService'])
	.controller('Controller_939', function($scope, $state, TestService){
		console.log('enter controller_939')
		$scope.test = TestService.getTest()
	})
