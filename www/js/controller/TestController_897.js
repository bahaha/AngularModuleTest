angular.module('TestController_897', ['TestService'])
	.controller('Controller_897', function($scope, $state, TestService){
		console.log('enter controller_897')
		$scope.test = TestService.getTest()
	})
