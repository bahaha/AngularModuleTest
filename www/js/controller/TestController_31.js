angular.module('TestController_31', ['TestService'])
	.controller('Controller_31', function($scope, $state, TestService){
		console.log('enter controller_31')
		$scope.test = TestService.getTest()
	})
