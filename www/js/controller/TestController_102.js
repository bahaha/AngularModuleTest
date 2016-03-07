angular.module('TestController_102', ['TestService'])
	.controller('Controller_102', function($scope, $state, TestService){
		console.log('enter controller_102')
		$scope.test = TestService.getTest()
	})
