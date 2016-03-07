angular.module('TestController_116', ['TestService'])
	.controller('Controller_116', function($scope, $state, TestService){
		console.log('enter controller_116')
		$scope.test = TestService.getTest()
	})
