angular.module('TestController_214', ['TestService'])
	.controller('Controller_214', function($scope, $state, TestService){
		console.log('enter controller_214')
		$scope.test = TestService.getTest()
	})
