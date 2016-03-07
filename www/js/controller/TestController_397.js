angular.module('TestController_397', ['TestService'])
	.controller('Controller_397', function($scope, $state, TestService){
		console.log('enter controller_397')
		$scope.test = TestService.getTest()
	})
