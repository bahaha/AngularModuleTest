angular.module('TestController_568', ['TestService'])
	.controller('Controller_568', function($scope, $state, TestService){
		console.log('enter controller_568')
		$scope.test = TestService.getTest()
	})
