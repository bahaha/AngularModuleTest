angular.module('TestController_445', ['TestService'])
	.controller('Controller_445', function($scope, $state, TestService){
		console.log('enter controller_445')
		$scope.test = TestService.getTest()
	})
