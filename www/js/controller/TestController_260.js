angular.module('TestController_260', ['TestService'])
	.controller('Controller_260', function($scope, $state, TestService){
		console.log('enter controller_260')
		$scope.test = TestService.getTest()
	})
