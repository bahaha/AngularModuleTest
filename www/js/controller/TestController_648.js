angular.module('TestController_648', ['TestService'])
	.controller('Controller_648', function($scope, $state, TestService){
		console.log('enter controller_648')
		$scope.test = TestService.getTest()
	})
