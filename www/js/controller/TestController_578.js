angular.module('TestController_578', ['TestService'])
	.controller('Controller_578', function($scope, $state, TestService){
		console.log('enter controller_578')
		$scope.test = TestService.getTest()
	})
