angular.module('TestController_421', ['TestService'])
	.controller('Controller_421', function($scope, $state, TestService){
		console.log('enter controller_421')
		$scope.test = TestService.getTest()
	})
