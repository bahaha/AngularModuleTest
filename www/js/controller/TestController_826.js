angular.module('TestController_826', ['TestService'])
	.controller('Controller_826', function($scope, $state, TestService){
		console.log('enter controller_826')
		$scope.test = TestService.getTest()
	})
