angular.module('TestController_273', ['TestService'])
	.controller('Controller_273', function($scope, $state, TestService){
		console.log('enter controller_273')
		$scope.test = TestService.getTest()
	})
