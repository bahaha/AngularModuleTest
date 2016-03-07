angular.module('TestController_396', ['TestService'])
	.controller('Controller_396', function($scope, $state, TestService){
		console.log('enter controller_396')
		$scope.test = TestService.getTest()
	})
