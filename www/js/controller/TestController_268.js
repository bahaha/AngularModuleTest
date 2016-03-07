angular.module('TestController_268', ['TestService'])
	.controller('Controller_268', function($scope, $state, TestService){
		console.log('enter controller_268')
		$scope.test = TestService.getTest()
	})
