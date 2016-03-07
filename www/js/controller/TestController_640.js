angular.module('TestController_640', ['TestService'])
	.controller('Controller_640', function($scope, $state, TestService){
		console.log('enter controller_640')
		$scope.test = TestService.getTest()
	})
