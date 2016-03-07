angular.module('TestController_12', ['TestService'])
	.controller('Controller_12', function($scope, $state, TestService){
		console.log('enter controller_12')
		$scope.test = TestService.getTest()
	})
