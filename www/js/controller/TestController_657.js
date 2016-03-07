angular.module('TestController_657', ['TestService'])
	.controller('Controller_657', function($scope, $state, TestService){
		console.log('enter controller_657')
		$scope.test = TestService.getTest()
	})
