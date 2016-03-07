angular.module('TestController_452', ['TestService'])
	.controller('Controller_452', function($scope, $state, TestService){
		console.log('enter controller_452')
		$scope.test = TestService.getTest()
	})
