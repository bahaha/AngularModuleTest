angular.module('TestController_720', ['TestService'])
	.controller('Controller_720', function($scope, $state, TestService){
		console.log('enter controller_720')
		$scope.test = TestService.getTest()
	})
