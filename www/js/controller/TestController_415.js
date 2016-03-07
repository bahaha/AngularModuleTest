angular.module('TestController_415', ['TestService'])
	.controller('Controller_415', function($scope, $state, TestService){
		console.log('enter controller_415')
		$scope.test = TestService.getTest()
	})
