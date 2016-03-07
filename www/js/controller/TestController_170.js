angular.module('TestController_170', ['TestService'])
	.controller('Controller_170', function($scope, $state, TestService){
		console.log('enter controller_170')
		$scope.test = TestService.getTest()
	})
