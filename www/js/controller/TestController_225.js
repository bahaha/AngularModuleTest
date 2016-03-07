angular.module('TestController_225', ['TestService'])
	.controller('Controller_225', function($scope, $state, TestService){
		console.log('enter controller_225')
		$scope.test = TestService.getTest()
	})
