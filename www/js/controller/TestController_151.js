angular.module('TestController_151', ['TestService'])
	.controller('Controller_151', function($scope, $state, TestService){
		console.log('enter controller_151')
		$scope.test = TestService.getTest()
	})
