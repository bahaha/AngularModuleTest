angular.module('TestController_692', ['TestService'])
	.controller('Controller_692', function($scope, $state, TestService){
		console.log('enter controller_692')
		$scope.test = TestService.getTest()
	})
