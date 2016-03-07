angular.module('TestController_908', ['TestService'])
	.controller('Controller_908', function($scope, $state, TestService){
		console.log('enter controller_908')
		$scope.test = TestService.getTest()
	})
