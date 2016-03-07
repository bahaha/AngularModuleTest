angular.module('TestController_805', ['TestService'])
	.controller('Controller_805', function($scope, $state, TestService){
		console.log('enter controller_805')
		$scope.test = TestService.getTest()
	})
