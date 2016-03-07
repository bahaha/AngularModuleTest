angular.module('TestController_501', ['TestService'])
	.controller('Controller_501', function($scope, $state, TestService){
		console.log('enter controller_501')
		$scope.test = TestService.getTest()
	})
