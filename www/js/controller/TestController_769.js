angular.module('TestController_769', ['TestService'])
	.controller('Controller_769', function($scope, $state, TestService){
		console.log('enter controller_769')
		$scope.test = TestService.getTest()
	})
