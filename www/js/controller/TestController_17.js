angular.module('TestController_17', ['TestService'])
	.controller('Controller_17', function($scope, $state, TestService){
		console.log('enter controller_17')
		$scope.test = TestService.getTest()
	})
