angular.module('TestController_763', ['TestService'])
	.controller('Controller_763', function($scope, $state, TestService){
		console.log('enter controller_763')
		$scope.test = TestService.getTest()
	})
