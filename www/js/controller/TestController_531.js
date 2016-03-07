angular.module('TestController_531', ['TestService'])
	.controller('Controller_531', function($scope, $state, TestService){
		console.log('enter controller_531')
		$scope.test = TestService.getTest()
	})
