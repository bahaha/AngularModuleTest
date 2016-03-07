angular.module('TestController_48', ['TestService'])
	.controller('Controller_48', function($scope, $state, TestService){
		console.log('enter controller_48')
		$scope.test = TestService.getTest()
	})
