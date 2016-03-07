angular.module('TestController_612', ['TestService'])
	.controller('Controller_612', function($scope, $state, TestService){
		console.log('enter controller_612')
		$scope.test = TestService.getTest()
	})
