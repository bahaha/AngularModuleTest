angular.module('TestController_924', ['TestService'])
	.controller('Controller_924', function($scope, $state, TestService){
		console.log('enter controller_924')
		$scope.test = TestService.getTest()
	})
