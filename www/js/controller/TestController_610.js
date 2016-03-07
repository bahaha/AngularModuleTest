angular.module('TestController_610', ['TestService'])
	.controller('Controller_610', function($scope, $state, TestService){
		console.log('enter controller_610')
		$scope.test = TestService.getTest()
	})
