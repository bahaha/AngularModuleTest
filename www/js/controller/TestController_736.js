angular.module('TestController_736', ['TestService'])
	.controller('Controller_736', function($scope, $state, TestService){
		console.log('enter controller_736')
		$scope.test = TestService.getTest()
	})
