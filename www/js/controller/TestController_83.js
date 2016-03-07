angular.module('TestController_83', ['TestService'])
	.controller('Controller_83', function($scope, $state, TestService){
		console.log('enter controller_83')
		$scope.test = TestService.getTest()
	})
