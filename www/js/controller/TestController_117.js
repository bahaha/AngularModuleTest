angular.module('TestController_117', ['TestService'])
	.controller('Controller_117', function($scope, $state, TestService){
		console.log('enter controller_117')
		$scope.test = TestService.getTest()
	})
