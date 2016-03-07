angular.module('TestController_431', ['TestService'])
	.controller('Controller_431', function($scope, $state, TestService){
		console.log('enter controller_431')
		$scope.test = TestService.getTest()
	})
