angular.module('TestController_701', ['TestService'])
	.controller('Controller_701', function($scope, $state, TestService){
		console.log('enter controller_701')
		$scope.test = TestService.getTest()
	})
