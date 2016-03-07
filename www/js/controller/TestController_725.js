angular.module('TestController_725', ['TestService'])
	.controller('Controller_725', function($scope, $state, TestService){
		console.log('enter controller_725')
		$scope.test = TestService.getTest()
	})
