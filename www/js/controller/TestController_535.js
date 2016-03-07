angular.module('TestController_535', ['TestService'])
	.controller('Controller_535', function($scope, $state, TestService){
		console.log('enter controller_535')
		$scope.test = TestService.getTest()
	})
