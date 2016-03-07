angular.module('TestController_937', ['TestService'])
	.controller('Controller_937', function($scope, $state, TestService){
		console.log('enter controller_937')
		$scope.test = TestService.getTest()
	})
