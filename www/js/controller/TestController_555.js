angular.module('TestController_555', ['TestService'])
	.controller('Controller_555', function($scope, $state, TestService){
		console.log('enter controller_555')
		$scope.test = TestService.getTest()
	})
