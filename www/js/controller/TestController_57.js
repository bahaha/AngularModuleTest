angular.module('TestController_57', ['TestService'])
	.controller('Controller_57', function($scope, $state, TestService){
		console.log('enter controller_57')
		$scope.test = TestService.getTest()
	})
