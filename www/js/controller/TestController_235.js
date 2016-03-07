angular.module('TestController_235', ['TestService'])
	.controller('Controller_235', function($scope, $state, TestService){
		console.log('enter controller_235')
		$scope.test = TestService.getTest()
	})
