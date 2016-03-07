angular.module('TestController_422', ['TestService'])
	.controller('Controller_422', function($scope, $state, TestService){
		console.log('enter controller_422')
		$scope.test = TestService.getTest()
	})
