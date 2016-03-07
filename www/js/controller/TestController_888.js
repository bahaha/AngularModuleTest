angular.module('TestController_888', ['TestService'])
	.controller('Controller_888', function($scope, $state, TestService){
		console.log('enter controller_888')
		$scope.test = TestService.getTest()
	})
