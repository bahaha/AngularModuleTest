angular.module('TestController_792', ['TestService'])
	.controller('Controller_792', function($scope, $state, TestService){
		console.log('enter controller_792')
		$scope.test = TestService.getTest()
	})
