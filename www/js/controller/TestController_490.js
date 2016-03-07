angular.module('TestController_490', ['TestService'])
	.controller('Controller_490', function($scope, $state, TestService){
		console.log('enter controller_490')
		$scope.test = TestService.getTest()
	})
