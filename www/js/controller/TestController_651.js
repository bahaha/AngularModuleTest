angular.module('TestController_651', ['TestService'])
	.controller('Controller_651', function($scope, $state, TestService){
		console.log('enter controller_651')
		$scope.test = TestService.getTest()
	})
