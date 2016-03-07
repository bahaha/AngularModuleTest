angular.module('TestController_574', ['TestService'])
	.controller('Controller_574', function($scope, $state, TestService){
		console.log('enter controller_574')
		$scope.test = TestService.getTest()
	})
