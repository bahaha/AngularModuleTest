angular.module('TestController_527', ['TestService'])
	.controller('Controller_527', function($scope, $state, TestService){
		console.log('enter controller_527')
		$scope.test = TestService.getTest()
	})
