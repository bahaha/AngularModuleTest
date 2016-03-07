angular.module('TestController_471', ['TestService'])
	.controller('Controller_471', function($scope, $state, TestService){
		console.log('enter controller_471')
		$scope.test = TestService.getTest()
	})
