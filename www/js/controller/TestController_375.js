angular.module('TestController_375', ['TestService'])
	.controller('Controller_375', function($scope, $state, TestService){
		console.log('enter controller_375')
		$scope.test = TestService.getTest()
	})
