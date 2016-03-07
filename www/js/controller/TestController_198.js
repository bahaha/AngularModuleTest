angular.module('TestController_198', ['TestService'])
	.controller('Controller_198', function($scope, $state, TestService){
		console.log('enter controller_198')
		$scope.test = TestService.getTest()
	})
