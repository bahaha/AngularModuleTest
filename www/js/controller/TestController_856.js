angular.module('TestController_856', ['TestService'])
	.controller('Controller_856', function($scope, $state, TestService){
		console.log('enter controller_856')
		$scope.test = TestService.getTest()
	})
