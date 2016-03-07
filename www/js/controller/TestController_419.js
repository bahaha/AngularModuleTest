angular.module('TestController_419', ['TestService'])
	.controller('Controller_419', function($scope, $state, TestService){
		console.log('enter controller_419')
		$scope.test = TestService.getTest()
	})
