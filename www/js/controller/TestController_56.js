angular.module('TestController_56', ['TestService'])
	.controller('Controller_56', function($scope, $state, TestService){
		console.log('enter controller_56')
		$scope.test = TestService.getTest()
	})
