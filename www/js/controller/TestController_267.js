angular.module('TestController_267', ['TestService'])
	.controller('Controller_267', function($scope, $state, TestService){
		console.log('enter controller_267')
		$scope.test = TestService.getTest()
	})
