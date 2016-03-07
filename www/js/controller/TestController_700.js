angular.module('TestController_700', ['TestService'])
	.controller('Controller_700', function($scope, $state, TestService){
		console.log('enter controller_700')
		$scope.test = TestService.getTest()
	})
