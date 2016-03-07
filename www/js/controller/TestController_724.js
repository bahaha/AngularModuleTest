angular.module('TestController_724', ['TestService'])
	.controller('Controller_724', function($scope, $state, TestService){
		console.log('enter controller_724')
		$scope.test = TestService.getTest()
	})
