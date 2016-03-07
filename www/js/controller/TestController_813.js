angular.module('TestController_813', ['TestService'])
	.controller('Controller_813', function($scope, $state, TestService){
		console.log('enter controller_813')
		$scope.test = TestService.getTest()
	})
