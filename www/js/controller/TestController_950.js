angular.module('TestController_950', ['TestService'])
	.controller('Controller_950', function($scope, $state, TestService){
		console.log('enter controller_950')
		$scope.test = TestService.getTest()
	})
