angular.module('TestController_833', ['TestService'])
	.controller('Controller_833', function($scope, $state, TestService){
		console.log('enter controller_833')
		$scope.test = TestService.getTest()
	})
