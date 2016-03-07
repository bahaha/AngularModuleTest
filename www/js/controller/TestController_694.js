angular.module('TestController_694', ['TestService'])
	.controller('Controller_694', function($scope, $state, TestService){
		console.log('enter controller_694')
		$scope.test = TestService.getTest()
	})
