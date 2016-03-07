angular.module('TestController_779', ['TestService'])
	.controller('Controller_779', function($scope, $state, TestService){
		console.log('enter controller_779')
		$scope.test = TestService.getTest()
	})
