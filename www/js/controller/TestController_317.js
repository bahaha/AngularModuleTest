angular.module('TestController_317', ['TestService'])
	.controller('Controller_317', function($scope, $state, TestService){
		console.log('enter controller_317')
		$scope.test = TestService.getTest()
	})
