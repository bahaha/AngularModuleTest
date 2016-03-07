angular.module('TestController_239', ['TestService'])
	.controller('Controller_239', function($scope, $state, TestService){
		console.log('enter controller_239')
		$scope.test = TestService.getTest()
	})
