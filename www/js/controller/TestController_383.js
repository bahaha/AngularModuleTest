angular.module('TestController_383', ['TestService'])
	.controller('Controller_383', function($scope, $state, TestService){
		console.log('enter controller_383')
		$scope.test = TestService.getTest()
	})
