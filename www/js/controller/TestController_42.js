angular.module('TestController_42', ['TestService'])
	.controller('Controller_42', function($scope, $state, TestService){
		console.log('enter controller_42')
		$scope.test = TestService.getTest()
	})
