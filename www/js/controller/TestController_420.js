angular.module('TestController_420', ['TestService'])
	.controller('Controller_420', function($scope, $state, TestService){
		console.log('enter controller_420')
		$scope.test = TestService.getTest()
	})
