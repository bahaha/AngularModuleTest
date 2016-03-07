angular.module('TestController_933', ['TestService'])
	.controller('Controller_933', function($scope, $state, TestService){
		console.log('enter controller_933')
		$scope.test = TestService.getTest()
	})
