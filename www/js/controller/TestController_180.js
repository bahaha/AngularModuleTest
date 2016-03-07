angular.module('TestController_180', ['TestService'])
	.controller('Controller_180', function($scope, $state, TestService){
		console.log('enter controller_180')
		$scope.test = TestService.getTest()
	})
