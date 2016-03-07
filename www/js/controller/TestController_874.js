angular.module('TestController_874', ['TestService'])
	.controller('Controller_874', function($scope, $state, TestService){
		console.log('enter controller_874')
		$scope.test = TestService.getTest()
	})
