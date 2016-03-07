angular.module('TestController_958', ['TestService'])
	.controller('Controller_958', function($scope, $state, TestService){
		console.log('enter controller_958')
		$scope.test = TestService.getTest()
	})
