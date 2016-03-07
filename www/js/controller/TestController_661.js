angular.module('TestController_661', ['TestService'])
	.controller('Controller_661', function($scope, $state, TestService){
		console.log('enter controller_661')
		$scope.test = TestService.getTest()
	})
