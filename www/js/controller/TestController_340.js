angular.module('TestController_340', ['TestService'])
	.controller('Controller_340', function($scope, $state, TestService){
		console.log('enter controller_340')
		$scope.test = TestService.getTest()
	})
