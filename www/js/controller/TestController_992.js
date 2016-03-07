angular.module('TestController_992', ['TestService'])
	.controller('Controller_992', function($scope, $state, TestService){
		console.log('enter controller_992')
		$scope.test = TestService.getTest()
	})
