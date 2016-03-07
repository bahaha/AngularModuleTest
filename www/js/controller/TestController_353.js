angular.module('TestController_353', ['TestService'])
	.controller('Controller_353', function($scope, $state, TestService){
		console.log('enter controller_353')
		$scope.test = TestService.getTest()
	})
