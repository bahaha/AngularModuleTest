angular.module('TestController_361', ['TestService'])
	.controller('Controller_361', function($scope, $state, TestService){
		console.log('enter controller_361')
		$scope.test = TestService.getTest()
	})
