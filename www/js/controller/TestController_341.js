angular.module('TestController_341', ['TestService'])
	.controller('Controller_341', function($scope, $state, TestService){
		console.log('enter controller_341')
		$scope.test = TestService.getTest()
	})
