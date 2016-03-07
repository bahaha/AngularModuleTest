angular.module('TestController_849', ['TestService'])
	.controller('Controller_849', function($scope, $state, TestService){
		console.log('enter controller_849')
		$scope.test = TestService.getTest()
	})
