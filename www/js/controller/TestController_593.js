angular.module('TestController_593', ['TestService'])
	.controller('Controller_593', function($scope, $state, TestService){
		console.log('enter controller_593')
		$scope.test = TestService.getTest()
	})
