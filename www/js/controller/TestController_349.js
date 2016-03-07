angular.module('TestController_349', ['TestService'])
	.controller('Controller_349', function($scope, $state, TestService){
		console.log('enter controller_349')
		$scope.test = TestService.getTest()
	})
