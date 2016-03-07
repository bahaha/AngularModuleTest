angular.module('TestController_258', ['TestService'])
	.controller('Controller_258', function($scope, $state, TestService){
		console.log('enter controller_258')
		$scope.test = TestService.getTest()
	})
