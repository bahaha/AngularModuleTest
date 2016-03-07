angular.module('TestController_7', ['TestService'])
	.controller('Controller_7', function($scope, $state, TestService){
		console.log('enter controller_7')
		$scope.test = TestService.getTest()
	})
