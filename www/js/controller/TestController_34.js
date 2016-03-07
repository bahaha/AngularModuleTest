angular.module('TestController_34', ['TestService'])
	.controller('Controller_34', function($scope, $state, TestService){
		console.log('enter controller_34')
		$scope.test = TestService.getTest()
	})
