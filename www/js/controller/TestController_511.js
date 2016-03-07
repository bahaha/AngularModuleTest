angular.module('TestController_511', ['TestService'])
	.controller('Controller_511', function($scope, $state, TestService){
		console.log('enter controller_511')
		$scope.test = TestService.getTest()
	})
