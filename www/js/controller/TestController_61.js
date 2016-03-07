angular.module('TestController_61', ['TestService'])
	.controller('Controller_61', function($scope, $state, TestService){
		console.log('enter controller_61')
		$scope.test = TestService.getTest()
	})
