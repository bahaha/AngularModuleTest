angular.module('TestController_506', ['TestService'])
	.controller('Controller_506', function($scope, $state, TestService){
		console.log('enter controller_506')
		$scope.test = TestService.getTest()
	})
