angular.module('TestController_463', ['TestService'])
	.controller('Controller_463', function($scope, $state, TestService){
		console.log('enter controller_463')
		$scope.test = TestService.getTest()
	})
