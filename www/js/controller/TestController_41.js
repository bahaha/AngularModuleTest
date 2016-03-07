angular.module('TestController_41', ['TestService'])
	.controller('Controller_41', function($scope, $state, TestService){
		console.log('enter controller_41')
		$scope.test = TestService.getTest()
	})
