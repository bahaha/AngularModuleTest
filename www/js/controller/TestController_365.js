angular.module('TestController_365', ['TestService'])
	.controller('Controller_365', function($scope, $state, TestService){
		console.log('enter controller_365')
		$scope.test = TestService.getTest()
	})
