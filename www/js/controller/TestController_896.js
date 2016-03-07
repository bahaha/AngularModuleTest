angular.module('TestController_896', ['TestService'])
	.controller('Controller_896', function($scope, $state, TestService){
		console.log('enter controller_896')
		$scope.test = TestService.getTest()
	})
