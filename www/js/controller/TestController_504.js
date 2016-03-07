angular.module('TestController_504', ['TestService'])
	.controller('Controller_504', function($scope, $state, TestService){
		console.log('enter controller_504')
		$scope.test = TestService.getTest()
	})
