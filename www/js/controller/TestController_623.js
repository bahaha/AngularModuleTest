angular.module('TestController_623', ['TestService'])
	.controller('Controller_623', function($scope, $state, TestService){
		console.log('enter controller_623')
		$scope.test = TestService.getTest()
	})
