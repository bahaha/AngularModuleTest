angular.module('TestController_828', ['TestService'])
	.controller('Controller_828', function($scope, $state, TestService){
		console.log('enter controller_828')
		$scope.test = TestService.getTest()
	})
