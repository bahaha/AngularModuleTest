angular.module('TestController_287', ['TestService'])
	.controller('Controller_287', function($scope, $state, TestService){
		console.log('enter controller_287')
		$scope.test = TestService.getTest()
	})
