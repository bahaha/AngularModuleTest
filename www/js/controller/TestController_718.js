angular.module('TestController_718', ['TestService'])
	.controller('Controller_718', function($scope, $state, TestService){
		console.log('enter controller_718')
		$scope.test = TestService.getTest()
	})
