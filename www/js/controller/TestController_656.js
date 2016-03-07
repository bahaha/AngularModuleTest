angular.module('TestController_656', ['TestService'])
	.controller('Controller_656', function($scope, $state, TestService){
		console.log('enter controller_656')
		$scope.test = TestService.getTest()
	})
