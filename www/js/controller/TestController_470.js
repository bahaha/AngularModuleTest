angular.module('TestController_470', ['TestService'])
	.controller('Controller_470', function($scope, $state, TestService){
		console.log('enter controller_470')
		$scope.test = TestService.getTest()
	})
