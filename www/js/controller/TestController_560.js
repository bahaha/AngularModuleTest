angular.module('TestController_560', ['TestService'])
	.controller('Controller_560', function($scope, $state, TestService){
		console.log('enter controller_560')
		$scope.test = TestService.getTest()
	})
