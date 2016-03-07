angular.module('TestController_886', ['TestService'])
	.controller('Controller_886', function($scope, $state, TestService){
		console.log('enter controller_886')
		$scope.test = TestService.getTest()
	})
