module.exports= function($scope, $state, TestService){
		console.log('enter controller_778')
		$scope.test = TestService.getTest()
	}
