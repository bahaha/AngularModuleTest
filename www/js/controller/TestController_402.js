angular.module('TestController_402', ['TestService'])
	.controller('Controller_402', function($scope, $state, TestService){
		console.log('enter controller_402')
		$scope.test = TestService.getTest()
	})
