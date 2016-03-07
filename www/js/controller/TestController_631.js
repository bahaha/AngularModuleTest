angular.module('TestController_631', ['TestService'])
	.controller('Controller_631', function($scope, $state, TestService){
		console.log('enter controller_631')
		$scope.test = TestService.getTest()
	})
