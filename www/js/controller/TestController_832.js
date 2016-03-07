angular.module('TestController_832', ['TestService'])
	.controller('Controller_832', function($scope, $state, TestService){
		console.log('enter controller_832')
		$scope.test = TestService.getTest()
	})
