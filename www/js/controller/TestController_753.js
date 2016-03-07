angular.module('TestController_753', ['TestService'])
	.controller('Controller_753', function($scope, $state, TestService){
		console.log('enter controller_753')
		$scope.test = TestService.getTest()
	})
