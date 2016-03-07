angular.module('TestController_721', ['TestService'])
	.controller('Controller_721', function($scope, $state, TestService){
		console.log('enter controller_721')
		$scope.test = TestService.getTest()
	})
