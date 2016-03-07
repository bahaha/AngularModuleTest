angular.module('TestController_484', ['TestService'])
	.controller('Controller_484', function($scope, $state, TestService){
		console.log('enter controller_484')
		$scope.test = TestService.getTest()
	})
