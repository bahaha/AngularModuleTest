angular.module('TestController_571', ['TestService'])
	.controller('Controller_571', function($scope, $state, TestService){
		console.log('enter controller_571')
		$scope.test = TestService.getTest()
	})
