angular.module('TestController_594', ['TestService'])
	.controller('Controller_594', function($scope, $state, TestService){
		console.log('enter controller_594')
		$scope.test = TestService.getTest()
	})
