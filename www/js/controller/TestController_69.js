angular.module('TestController_69', ['TestService'])
	.controller('Controller_69', function($scope, $state, TestService){
		console.log('enter controller_69')
		$scope.test = TestService.getTest()
	})
