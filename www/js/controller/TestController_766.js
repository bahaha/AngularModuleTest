angular.module('TestController_766', ['TestService'])
	.controller('Controller_766', function($scope, $state, TestService){
		console.log('enter controller_766')
		$scope.test = TestService.getTest()
	})
