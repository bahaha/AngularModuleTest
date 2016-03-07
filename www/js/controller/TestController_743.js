angular.module('TestController_743', ['TestService'])
	.controller('Controller_743', function($scope, $state, TestService){
		console.log('enter controller_743')
		$scope.test = TestService.getTest()
	})
