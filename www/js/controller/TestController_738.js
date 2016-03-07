angular.module('TestController_738', ['TestService'])
	.controller('Controller_738', function($scope, $state, TestService){
		console.log('enter controller_738')
		$scope.test = TestService.getTest()
	})
