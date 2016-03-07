angular.module('TestController_817', ['TestService'])
	.controller('Controller_817', function($scope, $state, TestService){
		console.log('enter controller_817')
		$scope.test = TestService.getTest()
	})
