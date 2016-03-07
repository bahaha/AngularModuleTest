angular.module('TestController_867', ['TestService'])
	.controller('Controller_867', function($scope, $state, TestService){
		console.log('enter controller_867')
		$scope.test = TestService.getTest()
	})
