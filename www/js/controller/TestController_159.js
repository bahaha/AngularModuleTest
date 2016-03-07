angular.module('TestController_159', ['TestService'])
	.controller('Controller_159', function($scope, $state, TestService){
		console.log('enter controller_159')
		$scope.test = TestService.getTest()
	})
