module.exports= function($scope, $state, TestService){
		console.log('enter controller_61')
		$scope.test = TestService.getTest()
	}
