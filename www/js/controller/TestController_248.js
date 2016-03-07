angular.module('TestController_248', ['TestService'])
	.controller('Controller_248', function($scope, $state, TestService){
		console.log('enter controller_248')
		$scope.test = TestService.getTest()
	})
