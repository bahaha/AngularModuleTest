angular.module('TestController_889', ['TestService'])
	.controller('Controller_889', function($scope, $state, TestService){
		console.log('enter controller_889')
		$scope.test = TestService.getTest()
	})
