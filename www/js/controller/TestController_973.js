angular.module('TestController_973', ['TestService'])
	.controller('Controller_973', function($scope, $state, TestService){
		console.log('enter controller_973')
		$scope.test = TestService.getTest()
	})
