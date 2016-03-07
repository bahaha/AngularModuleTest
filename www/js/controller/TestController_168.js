angular.module('TestController_168', ['TestService'])
	.controller('Controller_168', function($scope, $state, TestService){
		console.log('enter controller_168')
		$scope.test = TestService.getTest()
	})
