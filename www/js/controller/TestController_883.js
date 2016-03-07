angular.module('TestController_883', ['TestService'])
	.controller('Controller_883', function($scope, $state, TestService){
		console.log('enter controller_883')
		$scope.test = TestService.getTest()
	})
