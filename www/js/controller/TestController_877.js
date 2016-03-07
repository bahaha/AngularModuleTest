angular.module('TestController_877', ['TestService'])
	.controller('Controller_877', function($scope, $state, TestService){
		console.log('enter controller_877')
		$scope.test = TestService.getTest()
	})
