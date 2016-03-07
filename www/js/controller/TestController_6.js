angular.module('TestController_6', ['TestService'])
	.controller('Controller_6', function($scope, $state, TestService){
		console.log('enter controller_6')
		$scope.test = TestService.getTest()
	})
