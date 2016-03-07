angular.module('TestController_566', ['TestService'])
	.controller('Controller_566', function($scope, $state, TestService){
		console.log('enter controller_566')
		$scope.test = TestService.getTest()
	})
