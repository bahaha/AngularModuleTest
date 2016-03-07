angular.module('TestController_229', ['TestService'])
	.controller('Controller_229', function($scope, $state, TestService){
		console.log('enter controller_229')
		$scope.test = TestService.getTest()
	})
