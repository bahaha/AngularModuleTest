angular.module('TestController_604', ['TestService'])
	.controller('Controller_604', function($scope, $state, TestService){
		console.log('enter controller_604')
		$scope.test = TestService.getTest()
	})
