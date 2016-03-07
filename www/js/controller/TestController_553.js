angular.module('TestController_553', ['TestService'])
	.controller('Controller_553', function($scope, $state, TestService){
		console.log('enter controller_553')
		$scope.test = TestService.getTest()
	})
