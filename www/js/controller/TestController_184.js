angular.module('TestController_184', ['TestService'])
	.controller('Controller_184', function($scope, $state, TestService){
		console.log('enter controller_184')
		$scope.test = TestService.getTest()
	})
