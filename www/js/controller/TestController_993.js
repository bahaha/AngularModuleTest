angular.module('TestController_993', ['TestService'])
	.controller('Controller_993', function($scope, $state, TestService){
		console.log('enter controller_993')
		$scope.test = TestService.getTest()
	})
