angular.module('TestController_852', ['TestService'])
	.controller('Controller_852', function($scope, $state, TestService){
		console.log('enter controller_852')
		$scope.test = TestService.getTest()
	})
