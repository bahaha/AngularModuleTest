angular.module('TestController_697', ['TestService'])
	.controller('Controller_697', function($scope, $state, TestService){
		console.log('enter controller_697')
		$scope.test = TestService.getTest()
	})
