angular.module('TestController_38', ['TestService'])
	.controller('Controller_38', function($scope, $state, TestService){
		console.log('enter controller_38')
		$scope.test = TestService.getTest()
	})
