angular.module('TestController_321', ['TestService'])
	.controller('Controller_321', function($scope, $state, TestService){
		console.log('enter controller_321')
		$scope.test = TestService.getTest()
	})
