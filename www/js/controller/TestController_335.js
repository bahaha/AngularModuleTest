angular.module('TestController_335', ['TestService'])
	.controller('Controller_335', function($scope, $state, TestService){
		console.log('enter controller_335')
		$scope.test = TestService.getTest()
	})
