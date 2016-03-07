angular.module('TestController_809', ['TestService'])
	.controller('Controller_809', function($scope, $state, TestService){
		console.log('enter controller_809')
		$scope.test = TestService.getTest()
	})
