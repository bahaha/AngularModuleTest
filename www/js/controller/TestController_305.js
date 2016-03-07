angular.module('TestController_305', ['TestService'])
	.controller('Controller_305', function($scope, $state, TestService){
		console.log('enter controller_305')
		$scope.test = TestService.getTest()
	})
