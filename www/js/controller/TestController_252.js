angular.module('TestController_252', ['TestService'])
	.controller('Controller_252', function($scope, $state, TestService){
		console.log('enter controller_252')
		$scope.test = TestService.getTest()
	})
