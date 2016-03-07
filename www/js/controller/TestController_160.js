angular.module('TestController_160', ['TestService'])
	.controller('Controller_160', function($scope, $state, TestService){
		console.log('enter controller_160')
		$scope.test = TestService.getTest()
	})
