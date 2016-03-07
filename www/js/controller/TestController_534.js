angular.module('TestController_534', ['TestService'])
	.controller('Controller_534', function($scope, $state, TestService){
		console.log('enter controller_534')
		$scope.test = TestService.getTest()
	})
