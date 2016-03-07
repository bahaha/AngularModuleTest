angular.module('TestController_437', ['TestService'])
	.controller('Controller_437', function($scope, $state, TestService){
		console.log('enter controller_437')
		$scope.test = TestService.getTest()
	})
