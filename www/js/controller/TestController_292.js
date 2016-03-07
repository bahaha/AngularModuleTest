angular.module('TestController_292', ['TestService'])
	.controller('Controller_292', function($scope, $state, TestService){
		console.log('enter controller_292')
		$scope.test = TestService.getTest()
	})
