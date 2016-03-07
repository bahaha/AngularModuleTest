angular.module('TestController_211', ['TestService'])
	.controller('Controller_211', function($scope, $state, TestService){
		console.log('enter controller_211')
		$scope.test = TestService.getTest()
	})
