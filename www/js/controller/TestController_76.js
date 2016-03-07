angular.module('TestController_76', ['TestService'])
	.controller('Controller_76', function($scope, $state, TestService){
		console.log('enter controller_76')
		$scope.test = TestService.getTest()
	})
