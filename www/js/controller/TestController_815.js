angular.module('TestController_815', ['TestService'])
	.controller('Controller_815', function($scope, $state, TestService){
		console.log('enter controller_815')
		$scope.test = TestService.getTest()
	})
