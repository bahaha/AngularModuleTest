angular.module('TestController_831', ['TestService'])
	.controller('Controller_831', function($scope, $state, TestService){
		console.log('enter controller_831')
		$scope.test = TestService.getTest()
	})
