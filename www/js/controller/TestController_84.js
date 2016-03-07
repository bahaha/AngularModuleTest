angular.module('TestController_84', ['TestService'])
	.controller('Controller_84', function($scope, $state, TestService){
		console.log('enter controller_84')
		$scope.test = TestService.getTest()
	})
