angular.module('TestController_75', ['TestService'])
	.controller('Controller_75', function($scope, $state, TestService){
		console.log('enter controller_75')
		$scope.test = TestService.getTest()
	})
