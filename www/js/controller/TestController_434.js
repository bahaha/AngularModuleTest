angular.module('TestController_434', ['TestService'])
	.controller('Controller_434', function($scope, $state, TestService){
		console.log('enter controller_434')
		$scope.test = TestService.getTest()
	})
