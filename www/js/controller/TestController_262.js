module.exports= function($scope, $state, TestService){
		console.log('enter controller_262')
		$scope.test = TestService.getTest()
	}
