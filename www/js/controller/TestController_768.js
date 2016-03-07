angular.module('TestController_768', ['TestService'])
	.controller('Controller_768', function($scope, $state, TestService){
		console.log('enter controller_768')
		$scope.test = TestService.getTest()
	})
