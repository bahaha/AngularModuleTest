angular.module('TestController_186', ['TestService'])
	.controller('Controller_186', function($scope, $state, TestService){
		console.log('enter controller_186')
		$scope.test = TestService.getTest()
	})
