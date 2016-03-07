angular.module('TestController_39', ['TestService'])
	.controller('Controller_39', function($scope, $state, TestService){
		console.log('enter controller_39')
		$scope.test = TestService.getTest()
	})
