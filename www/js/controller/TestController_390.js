angular.module('TestController_390', ['TestService'])
	.controller('Controller_390', function($scope, $state, TestService){
		console.log('enter controller_390')
		$scope.test = TestService.getTest()
	})
