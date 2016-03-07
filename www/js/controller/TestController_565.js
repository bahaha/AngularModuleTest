angular.module('TestController_565', ['TestService'])
	.controller('Controller_565', function($scope, $state, TestService){
		console.log('enter controller_565')
		$scope.test = TestService.getTest()
	})
