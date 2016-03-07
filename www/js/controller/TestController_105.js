angular.module('TestController_105', ['TestService'])
	.controller('Controller_105', function($scope, $state, TestService){
		console.log('enter controller_105')
		$scope.test = TestService.getTest()
	})
