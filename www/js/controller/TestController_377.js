angular.module('TestController_377', ['TestService'])
	.controller('Controller_377', function($scope, $state, TestService){
		console.log('enter controller_377')
		$scope.test = TestService.getTest()
	})
