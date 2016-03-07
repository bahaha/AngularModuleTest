angular.module('TestController_714', ['TestService'])
	.controller('Controller_714', function($scope, $state, TestService){
		console.log('enter controller_714')
		$scope.test = TestService.getTest()
	})
