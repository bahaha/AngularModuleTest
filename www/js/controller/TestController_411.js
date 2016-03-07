angular.module('TestController_411', ['TestService'])
	.controller('Controller_411', function($scope, $state, TestService){
		console.log('enter controller_411')
		$scope.test = TestService.getTest()
	})
