angular.module('TestController_200', ['TestService'])
	.controller('Controller_200', function($scope, $state, TestService){
		console.log('enter controller_200')
		$scope.test = TestService.getTest()
	})
