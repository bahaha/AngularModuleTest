angular.module('TestController_85', ['TestService'])
	.controller('Controller_85', function($scope, $state, TestService){
		console.log('enter controller_85')
		$scope.test = TestService.getTest()
	})
