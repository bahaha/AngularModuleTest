angular.module('TestController_181', ['TestService'])
	.controller('Controller_181', function($scope, $state, TestService){
		console.log('enter controller_181')
		$scope.test = TestService.getTest()
	})
