angular.module('TestController_9', ['TestService'])
	.controller('Controller_9', function($scope, $state, TestService){
		console.log('enter controller_9')
		$scope.test = TestService.getTest()
	})
