angular.module('TestController_872', ['TestService'])
	.controller('Controller_872', function($scope, $state, TestService){
		console.log('enter controller_872')
		$scope.test = TestService.getTest()
	})
