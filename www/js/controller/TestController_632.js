angular.module('TestController_632', ['TestService'])
	.controller('Controller_632', function($scope, $state, TestService){
		console.log('enter controller_632')
		$scope.test = TestService.getTest()
	})
