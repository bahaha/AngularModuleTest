angular.module('TestController_671', ['TestService'])
	.controller('Controller_671', function($scope, $state, TestService){
		console.log('enter controller_671')
		$scope.test = TestService.getTest()
	})
