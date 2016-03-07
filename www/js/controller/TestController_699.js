angular.module('TestController_699', ['TestService'])
	.controller('Controller_699', function($scope, $state, TestService){
		console.log('enter controller_699')
		$scope.test = TestService.getTest()
	})
