angular.module('TestController_498', ['TestService'])
	.controller('Controller_498', function($scope, $state, TestService){
		console.log('enter controller_498')
		$scope.test = TestService.getTest()
	})
