module.exports= function($scope, $state, TestService){
		console.log('enter controller_486')
		$scope.test = TestService.getTest()
	}
