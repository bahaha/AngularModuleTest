angular.module('TestController_140', ['TestService'])
	.controller('Controller_140', function($scope, $state, TestService){
		console.log('enter controller_140')
		$scope.test = TestService.getTest()
	})
