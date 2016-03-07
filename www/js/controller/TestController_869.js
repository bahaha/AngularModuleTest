angular.module('TestController_869', ['TestService'])
	.controller('Controller_869', function($scope, $state, TestService){
		console.log('enter controller_869')
		$scope.test = TestService.getTest()
	})
