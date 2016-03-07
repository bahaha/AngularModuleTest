angular.module('TestController_670', ['TestService'])
	.controller('Controller_670', function($scope, $state, TestService){
		console.log('enter controller_670')
		$scope.test = TestService.getTest()
	})
