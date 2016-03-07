angular.module('TestController_728', ['TestService'])
	.controller('Controller_728', function($scope, $state, TestService){
		console.log('enter controller_728')
		$scope.test = TestService.getTest()
	})
