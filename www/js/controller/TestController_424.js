angular.module('TestController_424', ['TestService'])
	.controller('Controller_424', function($scope, $state, TestService){
		console.log('enter controller_424')
		$scope.test = TestService.getTest()
	})
