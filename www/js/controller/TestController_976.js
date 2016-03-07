angular.module('TestController_976', ['TestService'])
	.controller('Controller_976', function($scope, $state, TestService){
		console.log('enter controller_976')
		$scope.test = TestService.getTest()
	})
