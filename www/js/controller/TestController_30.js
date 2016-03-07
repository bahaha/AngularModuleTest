angular.module('TestController_30', ['TestService'])
	.controller('Controller_30', function($scope, $state, TestService){
		console.log('enter controller_30')
		$scope.test = TestService.getTest()
	})
