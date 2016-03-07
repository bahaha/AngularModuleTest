angular.module('TestController_207', ['TestService'])
	.controller('Controller_207', function($scope, $state, TestService){
		console.log('enter controller_207')
		$scope.test = TestService.getTest()
	})
