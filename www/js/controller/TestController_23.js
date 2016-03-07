angular.module('TestController_23', ['TestService'])
	.controller('Controller_23', function($scope, $state, TestService){
		console.log('enter controller_23')
		$scope.test = TestService.getTest()
	})
