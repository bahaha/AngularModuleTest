angular.module('TestController_1', ['TestService'])
	.controller('Controller_1', function($scope, $state, TestService){
		console.log('enter controller_1')
		$scope.test = TestService.getTest()
	})
