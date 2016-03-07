angular.module('TestController_663', ['TestService'])
	.controller('Controller_663', function($scope, $state, TestService){
		console.log('enter controller_663')
		$scope.test = TestService.getTest()
	})
