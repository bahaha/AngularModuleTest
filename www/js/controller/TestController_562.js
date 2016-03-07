angular.module('TestController_562', ['TestService'])
	.controller('Controller_562', function($scope, $state, TestService){
		console.log('enter controller_562')
		$scope.test = TestService.getTest()
	})
