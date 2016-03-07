angular.module('TestController_472', ['TestService'])
	.controller('Controller_472', function($scope, $state, TestService){
		console.log('enter controller_472')
		$scope.test = TestService.getTest()
	})
