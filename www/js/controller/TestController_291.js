angular.module('TestController_291', ['TestService'])
	.controller('Controller_291', function($scope, $state, TestService){
		console.log('enter controller_291')
		$scope.test = TestService.getTest()
	})
