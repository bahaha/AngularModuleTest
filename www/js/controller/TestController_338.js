angular.module('TestController_338', ['TestService'])
	.controller('Controller_338', function($scope, $state, TestService){
		console.log('enter controller_338')
		$scope.test = TestService.getTest()
	})
