angular.module('TestController_533', ['TestService'])
	.controller('Controller_533', function($scope, $state, TestService){
		console.log('enter controller_533')
		$scope.test = TestService.getTest()
	})
