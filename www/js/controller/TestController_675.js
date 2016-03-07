angular.module('TestController_675', ['TestService'])
	.controller('Controller_675', function($scope, $state, TestService){
		console.log('enter controller_675')
		$scope.test = TestService.getTest()
	})
