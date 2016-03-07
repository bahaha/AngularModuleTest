angular.module('TestController_999', ['TestService'])
	.controller('Controller_999', function($scope, $state, TestService){
		console.log('enter controller_999')
		$scope.test = TestService.getTest()
	})
