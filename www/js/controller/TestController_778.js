angular.module('TestController_778', ['TestService'])
	.controller('Controller_778', function($scope, $state, TestService){
		console.log('enter controller_778')
		$scope.test = TestService.getTest()
	})
