angular.module('TestController_104', ['TestService'])
	.controller('Controller_104', function($scope, $state, TestService){
		console.log('enter controller_104')
		$scope.test = TestService.getTest()
	})
