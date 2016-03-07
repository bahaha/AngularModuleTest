angular.module('TestController_880', ['TestService'])
	.controller('Controller_880', function($scope, $state, TestService){
		console.log('enter controller_880')
		$scope.test = TestService.getTest()
	})
