angular.module('TestController_760', ['TestService'])
	.controller('Controller_760', function($scope, $state, TestService){
		console.log('enter controller_760')
		$scope.test = TestService.getTest()
	})
