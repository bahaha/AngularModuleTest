angular.module('TestController_641', ['TestService'])
	.controller('Controller_641', function($scope, $state, TestService){
		console.log('enter controller_641')
		$scope.test = TestService.getTest()
	})
