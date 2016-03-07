angular.module('TestController_912', ['TestService'])
	.controller('Controller_912', function($scope, $state, TestService){
		console.log('enter controller_912')
		$scope.test = TestService.getTest()
	})
