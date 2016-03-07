angular.module('TestController_357', ['TestService'])
	.controller('Controller_357', function($scope, $state, TestService){
		console.log('enter controller_357')
		$scope.test = TestService.getTest()
	})
