angular.module('TestController_740', ['TestService'])
	.controller('Controller_740', function($scope, $state, TestService){
		console.log('enter controller_740')
		$scope.test = TestService.getTest()
	})
