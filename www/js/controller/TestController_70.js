module.exports= function($scope, $state, TestService){
		console.log('enter controller_70')
		$scope.test = TestService.getTest()
	}
