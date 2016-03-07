angular.module('TestController_333', ['TestService'])
	.controller('Controller_333', function($scope, $state, TestService){
		console.log('enter controller_333')
		$scope.test = TestService.getTest()
	})
