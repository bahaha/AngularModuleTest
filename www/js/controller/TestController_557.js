angular.module('TestController_557', ['TestService'])
	.controller('Controller_557', function($scope, $state, TestService){
		console.log('enter controller_557')
		$scope.test = TestService.getTest()
	})
