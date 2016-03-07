angular.module('TestController_464', ['TestService'])
	.controller('Controller_464', function($scope, $state, TestService){
		console.log('enter controller_464')
		$scope.test = TestService.getTest()
	})
