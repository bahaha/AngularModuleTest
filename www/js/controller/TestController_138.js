angular.module('TestController_138', ['TestService'])
	.controller('Controller_138', function($scope, $state, TestService){
		console.log('enter controller_138')
		$scope.test = TestService.getTest()
	})
