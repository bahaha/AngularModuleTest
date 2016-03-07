angular.module('TestController_20', ['TestService'])
	.controller('Controller_20', function($scope, $state, TestService){
		console.log('enter controller_20')
		$scope.test = TestService.getTest()
	})
