angular.module('TestController_879', ['TestService'])
	.controller('Controller_879', function($scope, $state, TestService){
		console.log('enter controller_879')
		$scope.test = TestService.getTest()
	})
