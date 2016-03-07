angular.module('TestController_81', ['TestService'])
	.controller('Controller_81', function($scope, $state, TestService){
		console.log('enter controller_81')
		$scope.test = TestService.getTest()
	})
