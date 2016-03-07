angular.module('TestController_262', ['TestService'])
	.controller('Controller_262', function($scope, $state, TestService){
		console.log('enter controller_262')
		$scope.test = TestService.getTest()
	})
