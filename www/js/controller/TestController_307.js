angular.module('TestController_307', ['TestService'])
	.controller('Controller_307', function($scope, $state, TestService){
		console.log('enter controller_307')
		$scope.test = TestService.getTest()
	})
