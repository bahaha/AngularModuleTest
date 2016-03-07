angular.module('TestController_114', ['TestService'])
	.controller('Controller_114', function($scope, $state, TestService){
		console.log('enter controller_114')
		$scope.test = TestService.getTest()
	})
