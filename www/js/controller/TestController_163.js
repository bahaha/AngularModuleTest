angular.module('TestController_163', ['TestService'])
	.controller('Controller_163', function($scope, $state, TestService){
		console.log('enter controller_163')
		$scope.test = TestService.getTest()
	})
