angular.module('TestController_326', ['TestService'])
	.controller('Controller_326', function($scope, $state, TestService){
		console.log('enter controller_326')
		$scope.test = TestService.getTest()
	})
