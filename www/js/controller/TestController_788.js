angular.module('TestController_788', ['TestService'])
	.controller('Controller_788', function($scope, $state, TestService){
		console.log('enter controller_788')
		$scope.test = TestService.getTest()
	})
