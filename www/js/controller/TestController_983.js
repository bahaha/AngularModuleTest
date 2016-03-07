angular.module('TestController_983', ['TestService'])
	.controller('Controller_983', function($scope, $state, TestService){
		console.log('enter controller_983')
		$scope.test = TestService.getTest()
	})
