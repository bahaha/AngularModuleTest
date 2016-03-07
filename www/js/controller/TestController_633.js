angular.module('TestController_633', ['TestService'])
	.controller('Controller_633', function($scope, $state, TestService){
		console.log('enter controller_633')
		$scope.test = TestService.getTest()
	})
