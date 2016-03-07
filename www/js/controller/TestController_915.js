angular.module('TestController_915', ['TestService'])
	.controller('Controller_915', function($scope, $state, TestService){
		console.log('enter controller_915')
		$scope.test = TestService.getTest()
	})
