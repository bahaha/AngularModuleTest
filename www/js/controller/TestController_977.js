angular.module('TestController_977', ['TestService'])
	.controller('Controller_977', function($scope, $state, TestService){
		console.log('enter controller_977')
		$scope.test = TestService.getTest()
	})
