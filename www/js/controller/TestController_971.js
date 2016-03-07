angular.module('TestController_971', ['TestService'])
	.controller('Controller_971', function($scope, $state, TestService){
		console.log('enter controller_971')
		$scope.test = TestService.getTest()
	})
