angular.module('TestController_202', ['TestService'])
	.controller('Controller_202', function($scope, $state, TestService){
		console.log('enter controller_202')
		$scope.test = TestService.getTest()
	})
