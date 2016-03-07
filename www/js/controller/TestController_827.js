angular.module('TestController_827', ['TestService'])
	.controller('Controller_827', function($scope, $state, TestService){
		console.log('enter controller_827')
		$scope.test = TestService.getTest()
	})
