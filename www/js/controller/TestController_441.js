angular.module('TestController_441', ['TestService'])
	.controller('Controller_441', function($scope, $state, TestService){
		console.log('enter controller_441')
		$scope.test = TestService.getTest()
	})
