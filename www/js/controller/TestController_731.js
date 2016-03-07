angular.module('TestController_731', ['TestService'])
	.controller('Controller_731', function($scope, $state, TestService){
		console.log('enter controller_731')
		$scope.test = TestService.getTest()
	})
