angular.module('TestController_969', ['TestService'])
	.controller('Controller_969', function($scope, $state, TestService){
		console.log('enter controller_969')
		$scope.test = TestService.getTest()
	})
