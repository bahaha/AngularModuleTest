angular.module('TestController_681', ['TestService'])
	.controller('Controller_681', function($scope, $state, TestService){
		console.log('enter controller_681')
		$scope.test = TestService.getTest()
	})
