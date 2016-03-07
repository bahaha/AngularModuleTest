angular.module('TestController_47', ['TestService'])
	.controller('Controller_47', function($scope, $state, TestService){
		console.log('enter controller_47')
		$scope.test = TestService.getTest()
	})
