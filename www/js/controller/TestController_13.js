angular.module('TestController_13', ['TestService'])
	.controller('Controller_13', function($scope, $state, TestService){
		console.log('enter controller_13')
		$scope.test = TestService.getTest()
	})
