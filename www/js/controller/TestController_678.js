angular.module('TestController_678', ['TestService'])
	.controller('Controller_678', function($scope, $state, TestService){
		console.log('enter controller_678')
		$scope.test = TestService.getTest()
	})
