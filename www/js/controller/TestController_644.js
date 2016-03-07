module.exports= function($scope, $state, TestService){
		console.log('enter controller_644')
		$scope.test = TestService.getTest()
	}
