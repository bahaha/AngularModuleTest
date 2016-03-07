angular.module('TestController_521', ['TestService'])
	.controller('Controller_521', function($scope, $state, TestService){
		console.log('enter controller_521')
		$scope.test = TestService.getTest()
	})
