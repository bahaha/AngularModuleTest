angular.module('TestController_550', ['TestService'])
	.controller('Controller_550', function($scope, $state, TestService){
		console.log('enter controller_550')
		$scope.test = TestService.getTest()
	})
