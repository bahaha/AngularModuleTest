angular.module('TestController_356', ['TestService'])
	.controller('Controller_356', function($scope, $state, TestService){
		console.log('enter controller_356')
		$scope.test = TestService.getTest()
	})
