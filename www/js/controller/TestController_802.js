module.exports= function($scope, $state, TestService){
		console.log('enter controller_802')
		$scope.test = TestService.getTest()
	}
