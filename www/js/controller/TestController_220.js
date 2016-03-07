angular.module('TestController_220', ['TestService'])
	.controller('Controller_220', function($scope, $state, TestService){
		console.log('enter controller_220')
		$scope.test = TestService.getTest()
	})
