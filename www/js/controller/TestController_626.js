angular.module('TestController_626', ['TestService'])
	.controller('Controller_626', function($scope, $state, TestService){
		console.log('enter controller_626')
		$scope.test = TestService.getTest()
	})
