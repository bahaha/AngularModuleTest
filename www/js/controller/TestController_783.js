angular.module('TestController_783', ['TestService'])
	.controller('Controller_783', function($scope, $state, TestService){
		console.log('enter controller_783')
		$scope.test = TestService.getTest()
	})
