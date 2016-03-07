angular.module('TestController_128', ['TestService'])
	.controller('Controller_128', function($scope, $state, TestService){
		console.log('enter controller_128')
		$scope.test = TestService.getTest()
	})
