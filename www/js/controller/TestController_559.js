angular.module('TestController_559', ['TestService'])
	.controller('Controller_559', function($scope, $state, TestService){
		console.log('enter controller_559')
		$scope.test = TestService.getTest()
	})
