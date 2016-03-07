angular.module('TestController_139', ['TestService'])
	.controller('Controller_139', function($scope, $state, TestService){
		console.log('enter controller_139')
		$scope.test = TestService.getTest()
	})
