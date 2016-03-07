angular.module('TestController_539', ['TestService'])
	.controller('Controller_539', function($scope, $state, TestService){
		console.log('enter controller_539')
		$scope.test = TestService.getTest()
	})
