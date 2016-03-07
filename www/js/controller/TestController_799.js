angular.module('TestController_799', ['TestService'])
	.controller('Controller_799', function($scope, $state, TestService){
		console.log('enter controller_799')
		$scope.test = TestService.getTest()
	})
