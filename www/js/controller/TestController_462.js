angular.module('TestController_462', ['TestService'])
	.controller('Controller_462', function($scope, $state, TestService){
		console.log('enter controller_462')
		$scope.test = TestService.getTest()
	})
