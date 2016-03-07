angular.module('TestController_526', ['TestService'])
	.controller('Controller_526', function($scope, $state, TestService){
		console.log('enter controller_526')
		$scope.test = TestService.getTest()
	})
