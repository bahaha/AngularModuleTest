angular.module('TestController_372', ['TestService'])
	.controller('Controller_372', function($scope, $state, TestService){
		console.log('enter controller_372')
		$scope.test = TestService.getTest()
	})
