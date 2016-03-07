angular.module('TestController_486', ['TestService'])
	.controller('Controller_486', function($scope, $state, TestService){
		console.log('enter controller_486')
		$scope.test = TestService.getTest()
	})
