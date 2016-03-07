angular.module('TestController_887', ['TestService'])
	.controller('Controller_887', function($scope, $state, TestService){
		console.log('enter controller_887')
		$scope.test = TestService.getTest()
	})
