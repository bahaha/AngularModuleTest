angular.module('TestController_112', ['TestService'])
	.controller('Controller_112', function($scope, $state, TestService){
		console.log('enter controller_112')
		$scope.test = TestService.getTest()
	})
