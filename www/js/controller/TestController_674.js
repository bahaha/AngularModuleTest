angular.module('TestController_674', ['TestService'])
	.controller('Controller_674', function($scope, $state, TestService){
		console.log('enter controller_674')
		$scope.test = TestService.getTest()
	})
