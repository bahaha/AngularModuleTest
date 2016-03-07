angular.module('TestController_241', ['TestService'])
	.controller('Controller_241', function($scope, $state, TestService){
		console.log('enter controller_241')
		$scope.test = TestService.getTest()
	})
