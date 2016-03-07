angular.module('TestController_814', ['TestService'])
	.controller('Controller_814', function($scope, $state, TestService){
		console.log('enter controller_814')
		$scope.test = TestService.getTest()
	})
