angular.module('TestController_921', ['TestService'])
	.controller('Controller_921', function($scope, $state, TestService){
		console.log('enter controller_921')
		$scope.test = TestService.getTest()
	})
