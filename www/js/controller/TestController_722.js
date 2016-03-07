angular.module('TestController_722', ['TestService'])
	.controller('Controller_722', function($scope, $state, TestService){
		console.log('enter controller_722')
		$scope.test = TestService.getTest()
	})
