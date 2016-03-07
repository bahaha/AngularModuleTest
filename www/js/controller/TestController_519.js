angular.module('TestController_519', ['TestService'])
	.controller('Controller_519', function($scope, $state, TestService){
		console.log('enter controller_519')
		$scope.test = TestService.getTest()
	})
