angular.module('TestController_482', ['TestService'])
	.controller('Controller_482', function($scope, $state, TestService){
		console.log('enter controller_482')
		$scope.test = TestService.getTest()
	})
