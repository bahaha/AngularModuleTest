angular.module('TestController_635', ['TestService'])
	.controller('Controller_635', function($scope, $state, TestService){
		console.log('enter controller_635')
		$scope.test = TestService.getTest()
	})
