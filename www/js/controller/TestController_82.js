angular.module('TestController_82', ['TestService'])
	.controller('Controller_82', function($scope, $state, TestService){
		console.log('enter controller_82')
		$scope.test = TestService.getTest()
	})
