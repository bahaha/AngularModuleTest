angular.module('TestController_236', ['TestService'])
	.controller('Controller_236', function($scope, $state, TestService){
		console.log('enter controller_236')
		$scope.test = TestService.getTest()
	})
