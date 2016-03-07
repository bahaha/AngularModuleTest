angular.module('TestController_4', ['TestService'])
	.controller('Controller_4', function($scope, $state, TestService){
		console.log('enter controller_4')
		$scope.test = TestService.getTest()
	})
