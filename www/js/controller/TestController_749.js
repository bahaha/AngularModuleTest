angular.module('TestController_749', ['TestService'])
	.controller('Controller_749', function($scope, $state, TestService){
		console.log('enter controller_749')
		$scope.test = TestService.getTest()
	})
