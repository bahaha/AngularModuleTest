angular.module('TestController_272', ['TestService'])
	.controller('Controller_272', function($scope, $state, TestService){
		console.log('enter controller_272')
		$scope.test = TestService.getTest()
	})
