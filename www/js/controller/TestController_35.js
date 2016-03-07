angular.module('TestController_35', ['TestService'])
	.controller('Controller_35', function($scope, $state, TestService){
		console.log('enter controller_35')
		$scope.test = TestService.getTest()
	})
