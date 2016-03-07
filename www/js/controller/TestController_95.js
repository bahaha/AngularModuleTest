angular.module('TestController_95', ['TestService'])
	.controller('Controller_95', function($scope, $state, TestService){
		console.log('enter controller_95')
		$scope.test = TestService.getTest()
	})
