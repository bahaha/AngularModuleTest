angular.module('TestController_894', ['TestService'])
	.controller('Controller_894', function($scope, $state, TestService){
		console.log('enter controller_894')
		$scope.test = TestService.getTest()
	})
