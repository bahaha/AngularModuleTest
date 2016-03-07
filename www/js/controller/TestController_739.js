angular.module('TestController_739', ['TestService'])
	.controller('Controller_739', function($scope, $state, TestService){
		console.log('enter controller_739')
		$scope.test = TestService.getTest()
	})
