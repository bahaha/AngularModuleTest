angular.module('TestController_545', ['TestService'])
	.controller('Controller_545', function($scope, $state, TestService){
		console.log('enter controller_545')
		$scope.test = TestService.getTest()
	})
