angular.module('TestController_477', ['TestService'])
	.controller('Controller_477', function($scope, $state, TestService){
		console.log('enter controller_477')
		$scope.test = TestService.getTest()
	})
