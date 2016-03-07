angular.module('TestController_901', ['TestService'])
	.controller('Controller_901', function($scope, $state, TestService){
		console.log('enter controller_901')
		$scope.test = TestService.getTest()
	})
