angular.module('TestController_404', ['TestService'])
	.controller('Controller_404', function($scope, $state, TestService){
		console.log('enter controller_404')
		$scope.test = TestService.getTest()
	})
