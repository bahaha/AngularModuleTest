angular.module('TestController_276', ['TestService'])
	.controller('Controller_276', function($scope, $state, TestService){
		console.log('enter controller_276')
		$scope.test = TestService.getTest()
	})
