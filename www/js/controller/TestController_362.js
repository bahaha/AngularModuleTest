angular.module('TestController_362', ['TestService'])
	.controller('Controller_362', function($scope, $state, TestService){
		console.log('enter controller_362')
		$scope.test = TestService.getTest()
	})
