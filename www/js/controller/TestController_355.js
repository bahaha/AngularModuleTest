angular.module('TestController_355', ['TestService'])
	.controller('Controller_355', function($scope, $state, TestService){
		console.log('enter controller_355')
		$scope.test = TestService.getTest()
	})
