angular.module('TestController_302', ['TestService'])
	.controller('Controller_302', function($scope, $state, TestService){
		console.log('enter controller_302')
		$scope.test = TestService.getTest()
	})
