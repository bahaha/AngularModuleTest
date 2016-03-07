angular.module('TestController_29', ['TestService'])
	.controller('Controller_29', function($scope, $state, TestService){
		console.log('enter controller_29')
		$scope.test = TestService.getTest()
	})
