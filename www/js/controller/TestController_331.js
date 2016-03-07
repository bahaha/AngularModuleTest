angular.module('TestController_331', ['TestService'])
	.controller('Controller_331', function($scope, $state, TestService){
		console.log('enter controller_331')
		$scope.test = TestService.getTest()
	})
