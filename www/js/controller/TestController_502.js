angular.module('TestController_502', ['TestService'])
	.controller('Controller_502', function($scope, $state, TestService){
		console.log('enter controller_502')
		$scope.test = TestService.getTest()
	})
