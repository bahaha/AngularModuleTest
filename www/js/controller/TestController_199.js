angular.module('TestController_199', ['TestService'])
	.controller('Controller_199', function($scope, $state, TestService){
		console.log('enter controller_199')
		$scope.test = TestService.getTest()
	})
