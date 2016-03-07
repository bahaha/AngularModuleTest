angular.module('TestController_904', ['TestService'])
	.controller('Controller_904', function($scope, $state, TestService){
		console.log('enter controller_904')
		$scope.test = TestService.getTest()
	})
