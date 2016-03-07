angular.module('TestController_587', ['TestService'])
	.controller('Controller_587', function($scope, $state, TestService){
		console.log('enter controller_587')
		$scope.test = TestService.getTest()
	})
