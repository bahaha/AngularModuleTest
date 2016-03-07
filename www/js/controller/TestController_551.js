angular.module('TestController_551', ['TestService'])
	.controller('Controller_551', function($scope, $state, TestService){
		console.log('enter controller_551')
		$scope.test = TestService.getTest()
	})
