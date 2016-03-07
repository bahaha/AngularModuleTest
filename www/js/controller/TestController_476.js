angular.module('TestController_476', ['TestService'])
	.controller('Controller_476', function($scope, $state, TestService){
		console.log('enter controller_476')
		$scope.test = TestService.getTest()
	})
