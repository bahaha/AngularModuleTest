angular.module('TestController_389', ['TestService'])
	.controller('Controller_389', function($scope, $state, TestService){
		console.log('enter controller_389')
		$scope.test = TestService.getTest()
	})
