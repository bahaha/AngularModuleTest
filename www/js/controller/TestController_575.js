angular.module('TestController_575', ['TestService'])
	.controller('Controller_575', function($scope, $state, TestService){
		console.log('enter controller_575')
		$scope.test = TestService.getTest()
	})
