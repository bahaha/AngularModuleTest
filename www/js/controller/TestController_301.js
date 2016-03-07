angular.module('TestController_301', ['TestService'])
	.controller('Controller_301', function($scope, $state, TestService){
		console.log('enter controller_301')
		$scope.test = TestService.getTest()
	})
