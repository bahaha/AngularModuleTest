angular.module('TestController_120', ['TestService'])
	.controller('Controller_120', function($scope, $state, TestService){
		console.log('enter controller_120')
		$scope.test = TestService.getTest()
	})
