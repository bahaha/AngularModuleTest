angular.module('TestController_122', ['TestService'])
	.controller('Controller_122', function($scope, $state, TestService){
		console.log('enter controller_122')
		$scope.test = TestService.getTest()
	})
