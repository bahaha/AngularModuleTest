angular.module('TestController_851', ['TestService'])
	.controller('Controller_851', function($scope, $state, TestService){
		console.log('enter controller_851')
		$scope.test = TestService.getTest()
	})
