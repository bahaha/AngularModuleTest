angular.module('TestController_479', ['TestService'])
	.controller('Controller_479', function($scope, $state, TestService){
		console.log('enter controller_479')
		$scope.test = TestService.getTest()
	})
