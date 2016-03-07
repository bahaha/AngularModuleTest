angular.module('TestController_263', ['TestService'])
	.controller('Controller_263', function($scope, $state, TestService){
		console.log('enter controller_263')
		$scope.test = TestService.getTest()
	})
