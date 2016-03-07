angular.module('TestController_426', ['TestService'])
	.controller('Controller_426', function($scope, $state, TestService){
		console.log('enter controller_426')
		$scope.test = TestService.getTest()
	})
