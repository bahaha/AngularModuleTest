angular.module('TestController_327', ['TestService'])
	.controller('Controller_327', function($scope, $state, TestService){
		console.log('enter controller_327')
		$scope.test = TestService.getTest()
	})
