angular.module('TestController_432', ['TestService'])
	.controller('Controller_432', function($scope, $state, TestService){
		console.log('enter controller_432')
		$scope.test = TestService.getTest()
	})
