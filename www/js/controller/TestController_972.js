angular.module('TestController_972', ['TestService'])
	.controller('Controller_972', function($scope, $state, TestService){
		console.log('enter controller_972')
		$scope.test = TestService.getTest()
	})
