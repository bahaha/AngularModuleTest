angular.module('TestController_643', ['TestService'])
	.controller('Controller_643', function($scope, $state, TestService){
		console.log('enter controller_643')
		$scope.test = TestService.getTest()
	})
