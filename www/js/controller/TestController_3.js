angular.module('TestController_3', ['TestService'])
	.controller('Controller_3', function($scope, $state, TestService){
		console.log('enter controller_3')
		$scope.test = TestService.getTest()
	})
