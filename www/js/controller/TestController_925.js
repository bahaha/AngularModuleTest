angular.module('TestController_925', ['TestService'])
	.controller('Controller_925', function($scope, $state, TestService){
		console.log('enter controller_925')
		$scope.test = TestService.getTest()
	})
