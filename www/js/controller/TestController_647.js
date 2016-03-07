angular.module('TestController_647', ['TestService'])
	.controller('Controller_647', function($scope, $state, TestService){
		console.log('enter controller_647')
		$scope.test = TestService.getTest()
	})
