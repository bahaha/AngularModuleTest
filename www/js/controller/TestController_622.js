angular.module('TestController_622', ['TestService'])
	.controller('Controller_622', function($scope, $state, TestService){
		console.log('enter controller_622')
		$scope.test = TestService.getTest()
	})
