angular.module('TestController_79', ['TestService'])
	.controller('Controller_79', function($scope, $state, TestService){
		console.log('enter controller_79')
		$scope.test = TestService.getTest()
	})
