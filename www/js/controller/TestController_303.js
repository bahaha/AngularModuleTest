angular.module('TestController_303', ['TestService'])
	.controller('Controller_303', function($scope, $state, TestService){
		console.log('enter controller_303')
		$scope.test = TestService.getTest()
	})
