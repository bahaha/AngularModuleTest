angular.module('TestController_733', ['TestService'])
	.controller('Controller_733', function($scope, $state, TestService){
		console.log('enter controller_733')
		$scope.test = TestService.getTest()
	})
