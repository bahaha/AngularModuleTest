angular.module('TestController_592', ['TestService'])
	.controller('Controller_592', function($scope, $state, TestService){
		console.log('enter controller_592')
		$scope.test = TestService.getTest()
	})
