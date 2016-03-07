angular.module('TestController_520', ['TestService'])
	.controller('Controller_520', function($scope, $state, TestService){
		console.log('enter controller_520')
		$scope.test = TestService.getTest()
	})
