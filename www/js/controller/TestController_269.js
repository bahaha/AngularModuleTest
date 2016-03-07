angular.module('TestController_269', ['TestService'])
	.controller('Controller_269', function($scope, $state, TestService){
		console.log('enter controller_269')
		$scope.test = TestService.getTest()
	})
