angular.module('TestController_113', ['TestService'])
	.controller('Controller_113', function($scope, $state, TestService){
		console.log('enter controller_113')
		$scope.test = TestService.getTest()
	})
