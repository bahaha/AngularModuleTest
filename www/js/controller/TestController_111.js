angular.module('TestController_111', ['TestService'])
	.controller('Controller_111', function($scope, $state, TestService){
		console.log('enter controller_111')
		$scope.test = TestService.getTest()
	})
