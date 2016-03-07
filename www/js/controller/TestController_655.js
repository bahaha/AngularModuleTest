angular.module('TestController_655', ['TestService'])
	.controller('Controller_655', function($scope, $state, TestService){
		console.log('enter controller_655')
		$scope.test = TestService.getTest()
	})
