angular.module('TestController_751', ['TestService'])
	.controller('Controller_751', function($scope, $state, TestService){
		console.log('enter controller_751')
		$scope.test = TestService.getTest()
	})
