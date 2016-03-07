angular.module('TestController_995', ['TestService'])
	.controller('Controller_995', function($scope, $state, TestService){
		console.log('enter controller_995')
		$scope.test = TestService.getTest()
	})
