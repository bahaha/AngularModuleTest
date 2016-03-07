angular.module('TestController_40', ['TestService'])
	.controller('Controller_40', function($scope, $state, TestService){
		console.log('enter controller_40')
		$scope.test = TestService.getTest()
	})
