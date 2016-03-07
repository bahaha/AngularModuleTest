angular.module('TestController_100', ['TestService'])
	.controller('Controller_100', function($scope, $state, TestService){
		console.log('enter controller_100')
		$scope.test = TestService.getTest()
	})
