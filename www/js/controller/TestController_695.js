angular.module('TestController_695', ['TestService'])
	.controller('Controller_695', function($scope, $state, TestService){
		console.log('enter controller_695')
		$scope.test = TestService.getTest()
	})
