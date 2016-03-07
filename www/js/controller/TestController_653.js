angular.module('TestController_653', ['TestService'])
	.controller('Controller_653', function($scope, $state, TestService){
		console.log('enter controller_653')
		$scope.test = TestService.getTest()
	})
