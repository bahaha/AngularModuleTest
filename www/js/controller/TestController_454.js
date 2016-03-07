angular.module('TestController_454', ['TestService'])
	.controller('Controller_454', function($scope, $state, TestService){
		console.log('enter controller_454')
		$scope.test = TestService.getTest()
	})
