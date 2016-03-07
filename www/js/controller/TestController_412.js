angular.module('TestController_412', ['TestService'])
	.controller('Controller_412', function($scope, $state, TestService){
		console.log('enter controller_412')
		$scope.test = TestService.getTest()
	})
