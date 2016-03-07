angular.module('TestController_762', ['TestService'])
	.controller('Controller_762', function($scope, $state, TestService){
		console.log('enter controller_762')
		$scope.test = TestService.getTest()
	})
